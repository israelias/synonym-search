import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from "../context/words.context";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    chip: {
        margin: theme.spacing(0.5),
    },
    section2: {
        margin: theme.spacing(2),
    },
}));

function thisSameWord(word, term, sense, label) {
    return sense === word.sense && label === word.label
}

function thisTotal(element) {
    return element.reduce(function (prev, cur) {
        return prev + cur.value
    }, 0)
}

const ItemContent = ({
                         headWord,
                         senseDefinition,
                         optionWord,
                         term,
                         root,
                         sense,
                         label,
                         definition,
                         headLabel,
                         display,
                         variant,
                         size,
                         children
                     }) => {
    const classes = useStyles();
    const itemVariant = variant ? variant : 'outlined';
    const itemSize = size ? size : 'small';
    const wordsHistory = useHistory()

    function sameWord(word, term, definition, label) {
        return label === word.label && definition === word.sense && term === word.name
    }

    const thisWord = wordsHistory.filter((item) => sameWord(item, term, definition, label));

    const myTotal = thisTotal(thisWord)

    return (
        <>
            <ListItemText
                primary={
                    term
                }
            />
            {
                myTotal > 0 &&
                <ListItemSecondaryAction>
                    <Tooltip
                        title={
                            `${term} used in this sense has been searched ${myTotal} times.`
                        }>
                        <Chip
                            className={classes.chip}
                            variant={itemVariant}
                            color="default"
                            size={itemSize}
                            label="Same Word"
                            avatar={
                                <Avatar>{
                                    myTotal
                                }</Avatar>
                            }/>
                    </Tooltip>
                </ListItemSecondaryAction>
            }
        </>
    );
}

export default ItemContent;
