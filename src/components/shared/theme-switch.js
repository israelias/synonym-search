import { useDispatchTheme} from '../../context/theme.context'
import Fab from '@material-ui/core/Fab';
import {makeStyles} from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox';
import React from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        left: theme.spacing(2),
    },
}));

const ToggleTheme = () => {
    const classes = useStyles()
    const themeDispatch = useDispatchTheme()
    const trigger = useScrollTrigger();

    return (
        <Slide appear={true} direction={"up"} in={!trigger}>
            <Fab
                component={Checkbox}
                size="small"
                color="secondary"
                aria-label="switch"
                className={classes.fab}
                checked={themeDispatch.darkMode}
                onChange={() => themeDispatch.setDarkMode(!themeDispatch.darkMode)}
            >

            </Fab>
        </Slide>
    )
}

export default ToggleTheme