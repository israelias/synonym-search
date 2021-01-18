import React, { useReducer, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import SavedListElement from "./shared/saved-list-element";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import theme from '../context/theme.context'
import Timeline from '@material-ui/lab/Timeline';
import { useHistory, HistoryStateContext } from '../context/words.context'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    list: {
        listStyle: 'none',
    }
}));

const Saves = ({ onItemButtonClick, children }) => {
    const classes = useStyles();
    const wordsState = useContext(HistoryStateContext)

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    function deleteListItem(word) {
        wordsState.filter((_, index) => index !== word.id)
    }

    if (!wordsState || wordsState.length === 0) {
        return (
            <div>
                <span>Everything you select will save here.</span>
            </div>
        )
    }

    return (
        <div>
            {children}
             <Timeline align="alternate" className={classes.list} >
               {wordsState.map((word, index) => (
                    <SavedListElement
                        id={index}
                        key={word.id}
                        word={word}
                        value="1"
                        onDelete={handleDelete(word)}>
                    </SavedListElement>
                ))}
            </Timeline>
        </div>
    );
}

export default Saves;

