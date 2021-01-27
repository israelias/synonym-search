import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { useDispatchHistory } from "../../context/words.context";
import Fab from "@material-ui/core/Fab"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        top: theme.spacing(2),
        right: theme.spacing(8),
        zIndex: 1200,
    },
}));

const Clear = () => {
    const classes = useStyles()
    const wordsDispatch = useDispatchHistory()

    const handleClick = (event) => {
        wordsDispatch({
            type: 'clear'
        })
    }

    return (
        <div className={classes.root}>
            <Fab
                variant="extended"
                size="small"
                color="primary"
                aria-label="clear"
                onClick={handleClick}
            >
                <DeleteSweepIcon />
                Clear
            </Fab>
        </div>
    )
};

export default Clear;