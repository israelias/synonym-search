import React from 'react'
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import {useHistory, useDispatchHistory} from "../../context/words.context";
import HeaderElements from "./../shared/header-elements"


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        top: theme.spacing(2),
        right: theme.spacing(2),
        zIndex: 1200,
    },
}));

const Clear = (props) => {
    const classes = useStyles()
    const wordsDispatch = useDispatchHistory()

    return (
        <HeaderElements>
        <div className={classes.root}>
            <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={() => wordsDispatch({type: 'clear'})}>
                Clear
            </Button>
        </div>
        </HeaderElements>
    )
};

export default Clear;