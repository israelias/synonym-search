import React from 'react'
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import ToggleTheme from "../shared/theme-switch";
import BackToTop from '../shared/back-top-button'
import Saves from "../saves/saves";
import Header from "./header"
import { useDispatchTheme } from "../../context/theme.context";
import ResultsHeader from "../headers/results-header"
import SavesHeader from "../headers/saves-header"
import { TabPanel } from "../../helpers/views.helper"
import View from "./view"

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        width: '12ch',
        '&:focus': {
            width: '20ch',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '12ch',
        '&:focus': {
            width: '20ch',
        },
    },
    main: {
        bottom: theme.spacing(2),
        right: theme.spacing(3),
        left: theme.spacing(3),
        top: theme.spacing(3),
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
    },
    frame: {
        top: '38px',
        minWidth: '100%',
        maxWidth: '100%',
        // marginTop: '38px',
        marginBottom: '38px',
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

    return (
        <div className={classes.root}>
            <Header>
                <View
                    loading={loading}
                    onSearchTextChange={onSearchTextChange}
                    searchText={searchText}
                />
                <Toolbar />
            </Header>
            <Grid component="main" item className={classes.frame}>
                <Toolbar id="back-to-top-anchor"/>
                <div className={classes.main}>
                    <TabPanel value={value} index={0}>
                        {children}
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Saves />
                    </TabPanel>
                </div>
            </Grid>
            <nav>
            <ToggleTheme/>
            <BackToTop/>
            </nav>
        </div>
    )
}

export default Layout

