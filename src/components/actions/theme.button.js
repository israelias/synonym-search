import React from "react";
import { useDispatchTheme} from '../../context/theme.context'
import Fab from '@material-ui/core/Fab';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import FixedBottom from "../shared/fixed-bottom"
import TonalityIcon from '@material-ui/icons/Tonality';
import Avatar from "@material-ui/core/Avatar";
import { useStyles } from "../../styles/button.styles"
import clsx from "clsx"
import useMediaQuery from "@material-ui/core/useMediaQuery";

const ToggleTheme = () => {
    const classes = useStyles()
    const trigger = useScrollTrigger();
    const themeDispatch = useDispatchTheme()
    const matches = useMediaQuery('(min-width:600px)');

    const handleClick = (event) => {
        themeDispatch.setDarkMode(!themeDispatch.darkMode)
    }

    return (
        // <Slide appear={true} direction={"up"} in={!trigger}>
        //     <FixedBottom offset={matches ? 16 : 48 }>

                <Fab
                    size="small"
                    color="primary"
                    aria-label="switch"
                    // className={
                    //     clsx(
                    //         classes.fab,
                    //         classes.fabNav,
                    //         classes.fabBottom)
                    // }
                    onClick={handleClick}
                >
                    <TonalityIcon />
                    {/*<Avatar*/}
                    {/*    className={classes.switch}*/}
                    {/*    component={TonalityIcon}*/}
                    {/*    variant='circular'*/}
                    {/*    color='secondary'*/}
                    {/*/>*/}
                </Fab>

            // </FixedBottom>
        // </Slide>
    )
}

export default ToggleTheme