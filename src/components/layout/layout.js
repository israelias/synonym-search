import React from 'react'
import Head from 'next/head'
import Toolbar from "@material-ui/core/Toolbar";
import ToggleTheme from "../shared/theme-switch";
import BackToTop from '../shared/back-top-button'
import Saves from "../saves/saves";
import Header from "./header"
import { useDispatchTheme } from "../../context/theme.context";
import { TabPanel } from "../../helpers/views.helper"
import View from "./view"
import PropTypes from "prop-types";
import { useStyles } from "../../styles/layout.styles"

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

Layout.propTypes = {
    children: PropTypes.node,
    searchText: PropTypes.string,
    loading: PropTypes.bool,
    onSearchTextChange: PropTypes.func,
};

export default Layout

