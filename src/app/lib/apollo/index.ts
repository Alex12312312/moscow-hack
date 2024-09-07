import {setContext} from '@apollo/client/link/context';
import {ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject} from '@apollo/client';
import {isEqual, merge} from 'lodash';
import {useMemo} from 'react';

const httpLink = createHttpLink({
    uri: '/api/gql',
    credentials: 'include',
});


export const authLink = (token?: string | null) => setContext((_, {headers}) => {
    return ({
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : null,
        },
    });
});

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject>;


export const createApolloClient = (token?: string | null) => new ApolloClient({
    link: authLink(token).concat(httpLink),
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    // events: relayStylePagination(),
                },
            },
        },
    }),
});


export const initializeApollo = (initialState = null, token: string | null = null) => {
    const _apolloClient = apolloClient ?? createApolloClient(token)

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract();

        // Merge the existing cache into data passed from getStaticProps/getServerSideProps
        const data = merge(initialState, existingCache, {
            // combine arrays using object equality (like in sets)
            arrayMerge: (destinationArray: any, sourceArray: any) => [
                ...sourceArray,
                ...destinationArray.filter((d: any) =>
                    sourceArray.every((s: any) => !isEqual(d, s))),
            ],
        });

        // Restore the cache with the merged data
        _apolloClient.cache.restore(data);
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined')
        return _apolloClient;
    if (!apolloClient)
        apolloClient = _apolloClient;

    return _apolloClient;
};

export function addApolloState(client: any, pageProps: any) {
    if (pageProps?.props)
        // eslint-disable-next-line no-param-reassign
        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();


    return pageProps;
}

export function useApollo(pageProps: any, token?: string) {
    const state = pageProps[APOLLO_STATE_PROP_NAME];
    return useMemo(() => initializeApollo(state, token), [state, token]);
}