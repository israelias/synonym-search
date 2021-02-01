import React from 'react'
import Head from 'next/head'
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import ToggleTheme from "../shared/theme-switch";
import BackToTop from '../shared/back-top-button'
import Saves from "../saves/saves";
import Header from "./header"
import { useDispatchTheme } from "../../context/theme.context";
import { TabPanel } from "../../helpers/views.helper"
import View from "./view"

const useStyles = makeStyles(theme => ({
    main: {
        bottom: theme.spacing(2),
        right: theme.spacing(3),
        left: theme.spacing(3),
        // top: theme.spacing(3),
        // paddingLeft: '10px',
        paddingLeft: '0.8rem',
        paddingRight: '0.8rem',
        paddingTop: '0.8rem',
        paddingBottom: 0,
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width:600px)': {
            paddingRight: '1.6rem',
            paddingBottom: '1.2rem',
        },
        top: '40px',
        minWidth: '100%',
        maxWidth: '100%',
        marginBottom: '40px',
    },
}));

const Layout = ({
                    children,
                    searchText,
                    loading,
                    onSearchTextChange
                }) => {
    const classes = useStyles();
    const themeDispatch = useDispatchTheme()
    const value = themeDispatch.value
    const description = `Search results for ${searchText}.`

    return (
        <>
            <Head>
                <meta
                    name="description"
                    content={description}
                />
                <meta name="og:title" content={searchText}/>
            </Head>
            <Header>
                <View
                    loading={loading}
                    onSearchTextChange={onSearchTextChange}
                    searchText={searchText}
                />
                <Toolbar />
            </Header>
            <main className={classes.main}>
                <Toolbar id="back-to-top-anchor"/>
                <TabPanel value={value} index={'search'}>
                    {children}
                </TabPanel>
                <TabPanel value={value} index={'saves'}>
                    <Saves/>
                </TabPanel>
            </main>
            <nav>
                <ToggleTheme/>
                <BackToTop/>
            </nav>
        </>
    )
}

export default Layout

