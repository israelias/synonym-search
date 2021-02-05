import React from 'react'
import { useDispatchHistory } from "../../context/words.context";
import Fab from "@material-ui/core/Fab"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import { useStyles } from "../../styles/layout.styles"

const Clear = ({ speed }) => {

    const classes = useStyles()
    const wordsDispatch = useDispatchHistory()

    const handleClick = (event) => {
        wordsDispatch({
            type: 'clear'
        })
    }

    return (
        <div className={classes.input}>
            <Fab
                variant={speed ? "round" : "extended"}
                size="small"
                color="primary"
                aria-label="clear"
                onClick={handleClick}
            >
                <DeleteSweepIcon />
                {!speed && "Clear"}
            </Fab>
        </div>
    )
};

export default Clear;