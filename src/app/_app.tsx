import App, { AppContext, AppProps } from 'next/app';
import { RootLayout } from '@/app/layout';
import fp from 'lodash/fp';
import { Provider } from 'react-redux'
import { store } from '@/app/lib/store/store';
import React from 'react';

interface IAppProps extends AppProps {
    cookie: string
    host: string
}

function RootApp({ Component, pageProps, cookie, host }: IAppProps) {
    return <>
            <Provider store={store}>
                <RootLayout host={host} cookie={cookie}>
                    <Component {...pageProps} />
                </RootLayout>
            </Provider>
    </>
}

RootApp.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext);
    return {
        ...appProps,
        cookie: fp.get('ctx.req.headers.cookie', appContext) as string,
        host: fp.getOr('', 'ctx.req.headers.host', appContext).split(':')[0] as string
    }
}

export default RootApp;