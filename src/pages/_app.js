import React, { useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeContextProvider, useDispatchTheme} from '../context/theme.context'
import {HistoryProvider} from '../context/words.context'

export default function MyApp(props) {
    const { Component, pageProps } = props;

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    const themeDispatch = useDispatchTheme()

    // Leverage user preference dynamically with useMediaQuery / prefers-color-scheme
    // to config auto dark mode.

    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    //
    // const theme = React.useMemo(
    //     () =>
    //         createMuiTheme({
    //             palette: {
    //                 type: prefersDarkMode ? 'dark' : 'light',
    //             },
    //         }),
    //     [prefersDarkMode],
    // );

    return (
        <React.Fragment>
            <Head>
                <title>Synonym Chaser</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
                <link rel="icon" href="/favicon.ico"/>
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