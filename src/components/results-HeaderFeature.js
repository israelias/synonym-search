import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {useHistory} from "../context/words.context";

function saveSense(word, sense, label) {
    return sense === word.sense && label === word.label
}

function sameRoot(word, root) {
    return root === word.uuid && root === word.root
}

function getTotal(element) {
    return element.reduce(function (prev, cur) {
        return prev + cur.value
    }, 0)
}

const useStyles = makeStyles((theme) => ({
    chip: {
        margin: theme.spacing(0.5),
    },
    section2: {
        margin: theme.spacing(2),
    },
    icon: {
        width: '100%'
    },
    wordBox: {
        position: 'relative',
        width: '100%',
        flex: '1',
        paddingLeft: '2px',
        boxSizing: 'border-box',

        whitespace: 'nowrap',
        textOverflow: 'ellipsis',
        minHeight: 'calc(2em + 2px)',
        display: 'flex',
        borderBottom: '1px solid',
        paddingRight: 0,

    },
}));

const HeaderContent = ({
                           root,
                           uuid,
                           sense,
                           label,
                           display,
                           variant,
                           size,
                           children
                       }) => {
    const classes = useStyles();
    const itemVariant = variant ? variant : 'outlined';
    const itemSize = size ? size : 'small';
    const wordsHistory = useHistory()
    const sameHead = wordsHistory.filter((item) => item.uuid === uuid && item.root === root);
    const headTotal = getTotal(sameHead)

    return (
        <>
            <ListItemIcon className={classes.icon}>
                <ListItemText
                    primary={
                        root
                    }
                />

                {headTotal > 0 &&
                <Chip
                    className={classes.chip}
                    variant={itemVariant}
                    color="primary"
                    size={itemSize}
                    label="Same Root"
                    avatar={
                        <Avatar>{
                            headTotal
                        }</Avatar>
                    }
                />}
            </ListItemIcon>

            {display && <ListItemText secondary={display}/>}
        </>
    );
}

export default HeaderContent;
