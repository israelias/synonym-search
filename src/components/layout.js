import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import ToggleTheme from "./shared/theme-switch";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Grow'
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Zoom from '@material-ui/core/Zoom';
import BackToTop from './shared/back-top-button'
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
// import NavBar from './navbar'
import SwipeableViews from "react-swipeable-views"
// import View from "./../components/view"
import Saves from "./saves";

const useStyles = makeStyles(theme => ({
    root: {
        bottom: theme.spacing(2),
        right: theme.spacing(3),
        left: theme.spacing(3),
        top: theme.spacing(3),
        paddingLeft: '10px',
        paddingRight: '0.8rem',
        paddingTop: '0.8rem',
        paddingBottom: 0,
        display: 'flex',
        flexDirection: 'column',
    },
    movement: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
    },
    frame: {
        minWidth: '100%',
        maxWidth: '100%',
        marginTop: '38px',
        marginBottom: '38px',
    },
    main: {
        borderLeft: '1px solid',
        borderRight: '1px solid',
        paddingRight: '0.8rem',
        paddingLeft: '0.8rem',
    },
    nav: {
        backgroundColor: theme.palette.background.default
    },
    link: {
        position: 'fixed',
        top: theme.spacing(2),
        left: theme.spacing(8),
    },
    logo: {
        position: 'fixed',
        top: theme.spacing(2),
        left: theme.spacing(2),
    },
    title: {
        textAlign: 'right',
        paddingLeft: '15vw'
    },
    headingTwo: {
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "black",
        }
    },
    header: {
        borderBottom: "1px solid",
        backgroundColor: theme.palette.background.default,
    },
    backToHome: {
        margin: '3rem 0 0'
    }
}));

function HeaderElements({props, children}) {
    const trigger = useScrollTrigger();
    return (
        <Fade appear={true} direction="left" in={!trigger}>
            <div>{children}</div>
        </Fade>
    );
}

function NavElements({props, children}) {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={true} direction="right" in={!trigger}>
            {children}
        </Slide>
    );
}

function BottomOnScroll({props, children}) {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={true} direction="down" in={!trigger}>
            <div>{children}</div>
        </Slide>
    );
}

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.background.paper,
//     },
//     nav: {
//         backgroundColor: theme.palette.background.default
//     },
//     test: {
//         position: 'fixed',
//         bottom: theme.spacing(2),
//         left: theme.spacing(2),
//     },
// }));

// function TabPanel(props) {
//     const {children, value, index, ...other} = props;
//
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box p={3}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }
//
// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `panel-${index}`,
    };
}

function View ({ children, value, index, search, ...other }) {
    const classes = useStyles()

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`panel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>
                        {children}

                        {!search && (

                            <Link href="/">
                                <a>
                                    <Fab
                                        button
                                        size="small"
                                        color="secondary">
                                        <KeyboardArrowLeftIcon/>
                                    </Fab>
                                </a>
                            </Link>
                        )}
                    </Typography>
                </Box>
            )}
        </div>
    );
}

const Layout = ({ children, search, history }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const handleThisClick = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div className={classes.root}>
            <header>
                <NavElements>
                    <AppBar
                        position="fixed"
                        elevation={0}
                        className={classes.nav}>
                        <Toolbar>
                            <Fab
                                button
                                size="small"
                                color="secondary"
                                className={classes.logo}>
                                <Avatar
                                    variant='square'
                                    color='secondary'>
                                    SYN
                                </Avatar>
                            </Fab>
                            {value === 0 ? (
                                <Fab
                                    button
                                    className={classes.link}
                                    size="small"
                                    value={value}
                                    color="secondary" onChange={handleThisClick}>
                                    S
                                </Fab>
                            ) : (
                                <Fab
                                    button
                                    className={classes.link}
                                    size="small"
                                    value={value}
                                    color="secondary" onChange={handleThisClick}>
                                    <KeyboardArrowLeftIcon/>
                                </Fab>
                            )}
                        </Toolbar>
                    </AppBar>
                </NavElements>
                <HeaderElements>
                    <AppBar
                        position="fixed"
                        elevation={0}
                        color={'transparent'}
                        className={classes.title}>
                        <Toolbar>
                            <Grid className={classes.movement}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    // indicatorColor="primary"
                                    // textColor="primary"
                                    // variant="fullWidth"
                                    aria-label="tab menu">

                                    <Tab
                                        label="Search"
                                        id="tab-search"
                                        aria-controls="panel-search"/>

                                    <Tab
                                        label="History"
                                        id="tab-history"
                                        aria-controls="panel-history"/>

                                </Tabs>
                            </Grid>

                            <Grid
                                className={classes.title}
                                item xs={12}
                                spacing={3}
                                display='flex'>
                                {value === 0 ? (
                                    <div>
                                        <Typography component='h1' variant='h5'>
                                            Synonymous
                                        </Typography>
                                    </div>
                                ) : (
                                    <div>
                                        <h2>
                                            Saves
                                        </h2>
                                    </div>
                                )}
                            </Grid>

                        </Toolbar>
                    </AppBar>
                </HeaderElements>
            </header>
            <Grid item className={classes.frame}>
                <ToggleTheme/>
                <Toolbar id="back-to-top-anchor"/>
                <main className={classes.main}>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <View index={0} value={value} dir={theme.direction}>
                            {children}
                        </View>
                        <View index={1} value={value} dir={theme.direction}>
                            <Saves>
                                <button
                                    className="button is-small"
                                    onClick={() => dispatch({type: 'clear'})}>
                                    Clear
                                </button>
                            </Saves>
                        </View>
                    </SwipeableViews>

                </main>
            </Grid>
            <BackToTop/>
        </div>
    )
}

export default Layout