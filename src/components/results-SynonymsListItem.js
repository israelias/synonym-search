import React, {useContext, useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem'
import {useHistory, useDispatchHistory} from "../context/words.context";
import ItemContent from './../components/results-ItemFeature'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
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
    labelBefore: {
        fontSize: '13px',
        lineHeight: '16px',
        position: 'absolute',
        left: '-1.5em',
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        content: 'attr(data - label)',
        paddingRight: '1em',
        color: 'var (--color - text)',
    },
    text: {
        fontSize: '16px',
        lineHeight: 1.2435,
    },
    input: {
        visibility: 'hidden',
        position: 'absolute',
    },
    senseBox: {
        display: 'flex',
        flex: '0 0 100%',
        position: 'relative',
        // marginBottom: '1.5rem',
    },
    senseWrap: {
        paddingRight: '1rem',
        borderLeftWidth: '1px',
        borderLeftColor: '#000',
        borderLeftStyle: 'solid',
        flex: '1',
        padding: '0 1rem 0 1rem',
        backgroundColor: 'inherit',
    },
    senseLabel: {
        position: 'absolute',
        bottom: '0',
        left: '-.2em',
        direction: 'ltr',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        height: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textOrientation: 'mixed',
        writingMode: 'vertical-lr',
        transformOrigin: '0',
        transform: 'rotate(180deg)',
        fontSize: '9px',
        color: '#000',
        transition: '.3 ease .3'
    },
    defLabel: {
        whitespace: 'nowrap',
        textOverflow: 'ellipsis',
        minHeight: 'calc(2em + 2px)',
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        paddingLeft: 0,
        paddingRight: 0,
        fontSize: '12px',
        lineHeight: 1.2435,
    },
}))

const ListItemButton = ({
                        onChange,
                        options,
                        definition,
                        headWord,
                        senseDefinition,
                        headInstance,
                        headLabel,
                        onMouseOver
                    }) => {
    const classes = useStyles();
    const wordsDispatch = useDispatchHistory()

    return (
        <>
            {options.map((option) => (
                <ListItem
                    button
                    component="li"
                    className={classes.wordBox}
                    value={option.wd}
                    id={option.wd}
                    key={option.wd}
                    onMouseOver={(e) => onMouseOver(option.wd)}
                    onClick={() => {
                        wordsDispatch({
                            type: 'add',
                            name: option.wd,
                            headWord: headWord,
                            headLabel: headLabel,
                            headInstance: headInstance,
                            senseDefinition: senseDefinition
                        });
                        onChange(option.wd);
                    }}>

                    <ItemContent
                        term={option.wd}
                        label={headLabel}
                        definition={senseDefinition}
                        root={headInstance}
                    />
                </ListItem>
            ))}
        </>
    );
};

export default ListItemButton;