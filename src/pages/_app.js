import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeContextProvider } from '../context/theme.context'
import { HistoryProvider } from '../context/words.context'

export default function MyApp(props) {
    const { Component, pageProps } = props;

    const userName = `@israelias`

    const siteURL = `https://synonym-chaser-845fgehna.vercel.app/`

    const title = `SynonymSEARCH with Merriam-Webster's Thesaurus: How to retain all queried words during a thesaurus search session.`

    const shortTitle = `Synonym/Search: An Interactive Thesaurus App`

    const ogSiteName = `SynonymSEARCH: Developed with Merriam-Webster's Collegiate Thesaurus`

    const ogTitle = `How to retain all queried words during a thesaurus search session.`

    const description = `Sustain meaning by having a persistent overview of your search impulses with this reliable and interactive Thesaurus. Our progressive iteration of Merriam-Webster's Collegiate Thesaurus is built by developers at Code Institute to bridge the missing gap between sessions: a tool that is five steps ahead of the user's impulses.`

    const ogImage = "https://raw.githubusercontent.com/israelias/synonym-chaser/master/public/images/og-image-synsearch-app.png"

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
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />

                {/* Favicon-generator */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link
                    rel="manifest"
                    href="/site.webmanifest"
                />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#ff0000"
                />
                <meta
                    name="msapplication-TileColor"
                    content="#00a300"
                />
                <meta
                    name="theme-color"
                    content="#ffffff"
                />
                <meta
                    charSet="utf-8"
                />
                {/*https://megatags.co/#generate-tags*/}
                <title>{title}</title>
                {/* Search Engine */}
                <meta name="description" content={description}/>
                {/* Schema for Google */}
                <meta itemProp="name" content={ogTitle}/>
                <meta itemProp="description" content={description}/>
                {/*Mobile App for iOS & Android*/}
                {/*Open Graph general (Facebook, Pinterest & Google+)*/}
                {/* Essential meta tags */}
                {/*Focus on accuracy, value, and clickability*/}
                <meta property="og:title" content={ogTitle}/>
                {/*Complement the title to make the snippet as appealing and click-worthy as possible.*/}
                <meta property="og:description" content={description}/>
                <meta property="og:image" content={ogImage}/>
                <meta property="og:url" content={siteURL}/>
                <meta name="og:site_name" content={ogSiteName}/>
                <meta name="og:type" content="website"/>
                <meta name="twitter:card" content="summary_large_image"/>
                {/* Non essential but recommended */}
                <meta property="og:site_name" content={ogSiteName}/>
                <meta name="twitter:image:alt" content={shortTitle}/>
                {/* Optional for analytics */}
                <meta name="twitter:card" content="app"/>
                <meta name="twitter:title" content={ogTitle}/>
                <meta name="twitter:description" content={description}/>
                <meta name="twitter:site" content={userName}/>
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