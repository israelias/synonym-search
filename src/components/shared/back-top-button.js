import Link from "next/link";
import Fab from '@material-ui/core/Fab';
import {makeStyles} from '@material-ui/core/styles'
import React from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        left: theme.spacing(2),
    },
}));

const BackToTop = () => {
    const classes = useStyles()
    const trigger = useScrollTrigger();
    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    };

    return (
        <Zoom in={trigger}>
            <Fab
                button
                role="presentation"
                color="secondary"
                size="small"
                aria-label="scroll back to top"
                className={classes.fab}
                onClick={handleClick}>
                <KeyboardArrowUpIcon/>
            </Fab>
        </Zoom>
    )
}

export default BackToTop