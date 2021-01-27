import React, {useContext, useState} from 'react'
import {makeStyles, useTheme, fade, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import ToggleTheme from "./shared/theme-switch";
import BackToTop from './shared/back-top-button'
import SavedList from "./saves-List";
import HeaderElements from "./../components/shared/header-elements"
import {useDispatchTheme} from "../context/theme.context";
import ResultsHeader from "./../components/results-header"
import SavesHeader from "./../components/saves-header"

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

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`panel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                    {children}
                </>

            )}
        </div>
    );
}

const Layout = ({ children, search, history, searchText, loading, onSearchTextChange }) => {
    const classes = useStyles();
    const theme = useTheme();
    const themeDispatch = useDispatchTheme()

    const value = themeDispatch.value

    return (
        <div className={classes.root}>
            <HeaderElements>
                {value === 0 ?
                    <ResultsHeader
                        loading={loading}
                        onSearchTextChange={onSearchTextChange}
                        searchText={searchText} />
                    :
                    <SavesHeader />
                }
                <Toolbar />
            </HeaderElements>

            <Grid item className={classes.frame}>
                <ToggleTheme/>
                <Toolbar id="back-to-top-anchor"/>
                <main className={classes.main}>
                    <TabPanel value={value} index={0}>
                        {children}
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <SavedList />
                    </TabPanel>
                </main>
            </Grid>
            <BackToTop/>

        </div>
    )
}

export default Layout

