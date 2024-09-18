'use client';
import React, { ReactNode } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useApollo } from '@/app/lib/apollo';
import { useCookies } from '@/app/lib/hooks/useCookies';

interface IApollo {
    children: ReactNode
    host: string
    cookie: string
}

export default function Apollo(props: IApollo) {
    const cookies = useCookies(props.cookie, props.host);
    const client = useApollo({}, cookies.get('access_token'))
    return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}