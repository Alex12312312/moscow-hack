import App, {AppContext, AppProps} from "next/app";
import RootLayout from "@/app/layout";
import {useApollo} from "@/app/lib/apollo";
import {useCookies} from "@/app/lib/hooks/useCookies";
import {ApolloProvider} from "@apollo/client";
import fp from "lodash/fp";

interface IAppProps extends AppProps {
    cookie: string
    host: string
}

function RootApp({Component, pageProps, cookie, host}: IAppProps) {
    const cookies = useCookies(cookie, host)
    const client = useApollo(pageProps, cookies.get('access_token'));

    return <>
        <ApolloProvider client={client}>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </ApolloProvider>
    </>
}

RootApp.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext);
    return {
        ...appProps,
        cookie: fp.get('ctx.req.headers.cookie', appContext),
        host: fp.getOr('', 'ctx.req.headers.host', appContext).split(':')[0]
    }
}

export default RootApp;