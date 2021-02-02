import React from "react";
import { useDispatchTheme} from '../../context/theme.context'
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles'
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import FixedBottom from "./fixed-bottom"
import TonalityIcon from '@material-ui/icons/Tonality';
import Avatar from "@material-ui/core/Avatar";

const reactFixedBottom = require("react-fixed-bottom")

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        zIndex: 1200,
        bottom: 'offset',
        right: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            left: theme.spacing(2),
        }
    },
    switch: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const ToggleTheme = () => {
    const classes = useStyles()
    const trigger = useScrollTrigger();
    const themeDispatch = useDispatchTheme()

    const handleClick = (event) => {
        themeDispatch.setDarkMode(!themeDispatch.darkMode)
    }

    return (
        <Slide appear={true} direction={"up"} in={!trigger}>
            <FixedBottom offset={16}>

                <Fab
                    size="small"
                    color="secondary"
                    aria-label="switch"
                    className={classes.fab}
                    onClick={handleClick}
                >
                    <Avatar
                        className={classes.switch}
                        component={TonalityIcon}
                        variant='circular'
                        color='secondary'
                    />
                </Fab>

            </FixedBottom>
        </Slide>
    )
}

export default ToggleTheme