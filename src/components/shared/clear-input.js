import React from 'react'
import { useDispatchHistory } from "../../context/words.context";
import Fab from "@material-ui/core/Fab"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import { useStyles } from "../../styles/button.styles"
import clsx from "clsx";

const Clear = () => {
    const classes = useStyles()
    const wordsDispatch = useDispatchHistory()

    const handleClick = (event) => {
        wordsDispatch({
            type: 'clear'
        })
    }

    return (
        <div className={clsx(classes.fab, classes.clear)}>
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