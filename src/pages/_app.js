import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeContextProvider } from '../context/theme.context'
import { HistoryProvider } from '../context/words.context'

export default function MyApp(props) {
    const { Component, pageProps } = props;

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>Synonym Search</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff0000" />
                <meta name="msapplication-TileColor" content="#00a300" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <ThemeContextProvider>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <HistoryProvider>
                {/*<Routes/>*/}
                <Component {...pageProps} />
                </HistoryProvider>
            </ThemeContextProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};