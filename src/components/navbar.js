import Link from "next/link";
import Fab from '@material-ui/core/Fab';
import {makeStyles} from '@material-ui/core/styles'
import React from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Grow";
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    nav: {
        backgroundColor: theme.palette.background.default
    },
    test: {
        position: 'fixed',
        bottom: theme.spacing(2),
        left: theme.spacing(2),
    },
}));

const NavBar = ({props, children}) => {
    const classes = useStyles()
    const trigger = useScrollTrigger();

    return (
        <Slide
            appear={true}
            direction={"right"}
            in={!trigger}>

                <AppBar
                    position="fixed"
                    elevation={0}
                    className={classes.nav}>
                    <Toolbar>
                        <Fab
                            button
                            size="small"
                            color="secondary"
                            // aria-label="switch"
                            // className={classes.test}
                        >
                            <Avatar
                                variant='square'
                                color='secondary'>
                                SYN
                            </Avatar>
                        </Fab>
                        <Grid
                            item xs={12}
                            spacing={3}
                            display='flex'>
                            {children}
                        </Grid>
                    </Toolbar>
                </AppBar>
                {/*<Toolbar/>*/}

        </Slide>
    )
}

export default NavBar