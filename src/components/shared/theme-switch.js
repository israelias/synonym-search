import React from "react";
import { useDispatchTheme} from '../../context/theme.context'
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles'
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import TonalityIcon from '@material-ui/icons/Tonality';
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        zIndex: 1200,
        bottom: theme.spacing(2),
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
    const themeDispatch = useDispatchTheme()
    const trigger = useScrollTrigger();

    return (
        <Slide appear={true} direction={"up"} in={!trigger}>
            <Fab
                size="small"
                color="secondary"
                aria-label="switch"
                className={classes.fab}
                onClick={() => themeDispatch.setDarkMode(!themeDispatch.darkMode)}
            >
                <Avatar
                    className={classes.switch}
                    component={TonalityIcon}
                    variant='circular'
                    color='secondary'
                />
            </Fab>
        </Slide>
    )
}

export default ToggleTheme