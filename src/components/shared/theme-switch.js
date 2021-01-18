// import {useDispatchTheme} from '../../context/theme.conext'
import Link from "next/link";
import Fab from '@material-ui/core/Fab';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import {makeStyles} from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
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
    // const themeDispatch = useDispatchTheme()
    const trigger = useScrollTrigger();

    return (
        <Slide appear={true} direction={"up"} in={!trigger}>
            <Fab
                component={Checkbox}
                size="small"
                color="secondary"
                aria-label="switch"
                className={classes.fab}
                // checked={themeDispatch.darkMode}
                // onChange={() => themeDispatch.setDarkMode(!themeDispatch.darkMode)}
            >
                {/*<RadioButtonUncheckedIcon/>*/}

            </Fab>
        </Slide>
    )
}

export default ToggleTheme