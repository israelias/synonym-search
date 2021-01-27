import React, { useState } from "react";
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import Display from "./shared/string-display"
import ListItemButton from "./../components/results-SynonymsListItem"
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography'
import {SameSenseShowTotal} from "../helpers/counters.helper"
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {ReplaceNodeTags, ReplaceSubString} from "./../helpers/string.helper"
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
    senseBox: {
        display: 'flex',
        flex: '0 0 100%',
        position: 'relative',
        // marginBottom: '1.5rem',
    },
    ul: {
        width: '100%',
        backgroundColor: 'inherit',
        padding: 0,
        position: 'relative',
    },
    wordBoxSubHead: {
        top: '2.5rem',
        backgroundColor: theme.palette.background.default,
        width: '100%',
        // borderLeft: '1px solid',
        borderBottom: '1px solid',
        flexDirection: 'column',
        flex: '1',
        paddingLeft: '16px',
        paddingBottom: '.8rem',
        boxSizing: 'border-box',
        // height: '6em',
    },
    icon: {
        width: '100%'
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
    senseWrap: {
        // display: 'flex',
        // alignItems: 'center',
        paddingRight: '1rem',
        borderLeftWidth: '1px',
        borderLeftColor: '#000',
        borderLeftStyle: 'solid',
        flex: '1',
        padding: '0 1rem 0 1rem',
        // position: 'relative'
        backgroundColor: 'inherit',
        // padding: 0,
    },
}));

const ResultsDefinitionsList = ({
                                    loading,
                                    sense,
                                    onSelectionChange,
                                    headWord,
                                    headLabel,
                                    headInstance
                                }) => {
    const classes = useStyles();
    const [optionWord, setOptionWord] = useState(headWord)

    function onScrollTrigger(word) {
        setOptionWord(word)
    }

    function onMouseOver(word) {
        setOptionWord(word)
    }

    return (

        <Box
            component='div'
            key={`sense-${sense}`}
            className={classes.senseBox}>
            <ul
                className={classes.ul}>
                <ListSubheader
                    key={`subheader-def-${sense}`}
                    className={classes.wordBoxSubHead}
                    id={sense[0][1].dt[0][1]}
                >
                    <ListItemIcon className={classes.icon} key={`icon-${sense[0][1].dt[0][1]}-${headLabel}`}>
                        <ListItemText
                            primary={
                                <ReplaceNodeTags
                                    string={
                                        sense[0][1].dt[0][1]
                                    }
                                />
                            }
                        />
                        <SameSenseShowTotal
                            loading={loading}
                            sense={sense[0][1].dt[0][1]}
                            label={headLabel}
                        />
                    </ListItemIcon>
                        {sense[0][1].dt[1] &&
                            <Display
                                key={`display-${sense[0][1].dt[1][1][0].t}`}
                                sampleString={sense[0][1].dt[1][1][0].t}
                                optionWord={optionWord}
                                // trigger={trigger}
                            />
                        }


                </ListSubheader>
                {
                    sense[0][1].syn_list &&
                    // <Box component="ul" className={classes.senseWrap}>
                    // <Box component="li" className={classes.senseLabel}>
                    //     "Synonyms"
                    // </Box>
                    <ListItemButton
                        key={`synonyms-of-${headWord}`}
                        loading={loading}
                        options={sense[0][1].syn_list[0]}
                        definition="Synonyms"
                        headWord={headWord}
                        headLabel={headLabel}
                        headInstance={headInstance}
                        senseDefinition={sense[0][1].dt[0][1]}
                        onMouseOver={(word) => onMouseOver(word)}
                        onChange={(value) => onSelectionChange(value)}
                        onScrollTrigger={(word) => onScrollTrigger(word)}
                    />
                    // </Box>
                }
                {
                    sense[0][1].rel_list &&
                    <ListItemButton
                        key={`related-words-to-${headWord}`}
                        loading={loading}
                        options={sense[0][1].rel_list[0]}
                        definition="Related Words"
                        headWord={headWord}
                        headLabel={headLabel}
                        headInstance={headInstance}
                        senseDefinition={sense[0][1].dt[0][1]}
                        onMouseOver={(word) => onMouseOver(word)}
                        onChange={(value) => onSelectionChange(value)}
                        onScrollTrigger={(word) => onScrollTrigger(word)}
                    />
                }
                {
                    sense[0][1].phrase_list &&
                    <ListItemButton
                        key={`synonymous-phrases-of-${headWord}`}
                        loading={loading}
                        options={sense[0][1].phrase_list[0]}
                        definition="Synonymous Phrases"
                        headWord={headWord}
                        headLabel={headLabel}
                        headInstance={headInstance}
                        senseDefinition={sense[0][1].dt[0][1]}
                        onMouseOver={(word) => onMouseOver(word)}
                        onChange={(value) => onSelectionChange(value)}
                        onScrollTrigger={(word) => onScrollTrigger(word)}
                    />
                }
                {
                    sense[0][1].sim_list &&
                    <ListItemButton
                        key={`similar-words-to-${headWord}`}
                        loading={loading}
                        options={[].concat(sense[0][1].sim_list).flat()}
                        definition="Similar Words"
                        headWord={headWord}
                        headLabel={headLabel}
                        headInstance={headInstance}
                        senseDefinition={sense[0][1].dt[0][1]}
                        onMouseOver={(word) => onMouseOver(word)}
                        onChange={(value) => onSelectionChange(value)}
                        onScrollTrigger={(word) => onScrollTrigger(word)}
                />
                }

            </ul>
        </Box>

    );
};

export default ResultsDefinitionsList;