import Head from 'next/head'
import Link from 'next/link'
import React, {useState} from 'react'
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
    movement: {
        flexGrow: 1,
    },
    title: {
        textAlign: 'right'
    }
}));

const HeadBar = ({ props, first, second, third }) => {
    const classes = useStyles();
    const trigger = useScrollTrigger();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // const handleChangeIndex = (index) => {
    //     setValue(index);
    // };

    return (
        <Fade appear={true} direction="left" in={!trigger}>
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

                            {second && <Tab
                                label="History"
                                id="tab-history"
                                aria-controls="panel-history"/>
                            }

                            <Tab
                                label="Info"
                                id="tab-info"
                                aria-controls="panel-info"/>

                        </Tabs>
                    </Grid>

                    <Grid
                        className={classes.title}
                        item xs={12}
                        spacing={3}
                        display='flex'>
                        {first ? (
                            <div>
                                <Typography component='h1' variant='h4'>
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
        </Fade>
    )
}

export default HeadBar