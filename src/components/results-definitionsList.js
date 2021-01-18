import React, { useState } from "react";
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import SubHeaderContent from './../components/results-SubItemFeature'
import Display from "./shared/string-display"
import ListItemButton from "./../components/results-SynonymsListItem"
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography'

const reStyles = {
    root: {
        position: 'relative',
    },
    senseBox: {
        display: 'flex',
        flex: '0 0 100%',
        position: 'relative',
        marginBottom: '1.5rem',
    },
    senseWrap: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: '1rem',
        borderLeftWidth: '1px',
        borderLeftColor: '#000',
        borderLeftStyle: 'solid',
        flex: '1',
        padding: '0 1rem 0 1rem',
    },
    senseIndex: {
        position: 'absolute',
        // bottom: '0',
        left: '-1em',
        top: '20%'
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
};

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        // padding: '0 30px',
        // marginTop: '1.5rem'
        // borderTop: '1px solid',
        // borderLeftWidth: '1px',
        // borderLeftColor: '#000',
        // borderLeftStyle: 'solid',
    },
    senseBox: {
        display: 'flex',
        flex: '0 0 100%',
        position: 'relative',
        // marginBottom: '1.5rem',
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
    ul: {
        width: '100%',
        backgroundColor: 'inherit',
        padding: 0,
        position: 'relative',
        // marginTop: '1.5rem',
    },
    defLabel: {
        whitespace: 'nowrap',
        textOverflow: 'ellipsis',
        minHeight: 'calc(2em + 2px)',
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        // borderBottom: '1px solid',
        paddingLeft: 0,
        paddingRight: 0,
        fontSize: '12px',
        lineHeight: 1.2435,
        borderBottom: '1px solid',
    },
    wordBoxSubHead: {
        top: '3rem',
        // backgroundColor: '#fafafa',
        backgroundColor: theme.palette.background.default,
        // position: 'relative',
        // borderBottom: '1px solid #000',
        width: '100%',
        // display: 'flex',
        // alignItems: 'stretch',
        // 768 up its not column
        flexDirection: 'column',
        flex: '1',
        // paddingLeft: '2px',
        paddingLeft: '16px',
        boxSizing: 'border-box',

        // parent level box
        // maxWidth: 'calc(50% - 5px)',

    },
    wordBox: {
        position: 'relative',
        // borderBottom: '1px solid #000',
        width: '100%',
        // display: 'flex',
        // alignItems: 'stretch',
        // 768 up its not column

        // flexDirection: 'column',

        flex: '1',
        paddingLeft: '2px',
        boxSizing: 'border-box',

        whitespace: 'nowrap',
        textOverflow: 'ellipsis',
        minHeight: 'calc(2em + 2px)',
        display: 'flex',
        borderBottom: '1px solid',
        paddingRight: 0,

        // fontSize: '16px',
        // lineHeight: 1.2435,

        // parent level box
        // maxWidth: 'calc(50% - 5px)',

    },
    textSubHead: {
        // borderLeft: '1px solid',
        whitespace: 'nowrap',
        textOverflow: 'ellipsis',
        minHeight: 'calc(2em + 2px)',
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        borderBottom: '1px solid',
        paddingLeft: 16,
        // paddingRight: 0,

        //md up for MAIN.
        fontSize: '16px',
        lineHeight: 1.2435,

        //mobile
        // fontSize: '18px',
        // lineHeight: 1.2395,
    },
}));

const ResultsDefinitionsList = ({result, onSelectionChange, headWord, headLabel, headInstance}) => {
    const classes = useStyles();
    const [optionWord, setOptionWord] = useState("")

    function onMouseOver(word) {
        setOptionWord(word)
    }

    return (
        <List
            className={classes.root}
            id={result.meta.uuid}
            subheader={<li/>}>
            {result.def[0].sseq.map((s, index) => (
                <Box
                    component='li'
                    key={`sense-${index}`}
                    className={classes.senseBox}>
                    <ul
                        className={classes.ul}>
                        <ListSubheader
                            className={classes.wordBoxSubHead}>
                            <SubHeaderContent
                                key={`sub-${headLabel}`}
                                sense={s[0][1].dt[0][1]}
                                label={headLabel}
                            />
                            <Box component={'span'}>
                                {s[0][1].dt[1] ?
                                    <Display sampleString={s[0][1].dt[1][1][0].t}
                                             headWord={headWord}
                                             optionWord={optionWord}/>
                                    : <span>{s[0][1].dt[0][1]}.</span>}
                            </Box>
                            <Box style={reStyles.senseBox}>
                                <Box style={reStyles.senseWrap}>
                                    <Typography style={reStyles.senseIndex}>
                                        {index}
                                    </Typography>
                                    <Typography style={reStyles.senseLabel}>
                                        {headLabel}
                                    </Typography>
                                </Box>
                            </Box>
                        </ListSubheader>
                        {
                            s[0][1].syn_list &&
                            <ListItemButton
                                options={s[0][1].syn_list[0]}
                                definition="Synonyms"
                                headWord={headWord}
                                headLabel={headLabel}
                                headInstance={headInstance}
                                senseDefinition={s[0][1].dt[0][1]}
                                onMouseOver={(word) => onMouseOver(word)}
                                onChange={(value) => onSelectionChange(value)}
                            />
                        }
                        {
                            s[0][1].phrase_list &&
                            <ListItemButton
                                options={s[0][1].phrase_list[0]}
                                definition="Synonymous Phrases"
                                headWord={headWord}
                                headLabel={headLabel}
                                headInstance={headInstance}
                                senseDefinition={s[0][1].dt[0][1]}
                                onMouseOver={(word) => onMouseOver(word)}
                                onChange={(value) => onSelectionChange(value)}
                            />
                        }
                        {
                            s[0][1].sim_list &&
                            <ListItemButton
                                options={[].concat(s[0][1].sim_list).flat()}
                                definition="Similar Words"
                                headWord={headWord}
                                headLabel={headLabel}
                                headInstance={headInstance}
                                senseDefinition={s[0][1].dt[0][1]}
                                onMouseOver={(word) => onMouseOver(word)}
                                onChange={(value) => onSelectionChange(value)}
                        />
                        }

                    </ul>
                </Box>
            ))}
        </List>
    );
};

export default ResultsDefinitionsList;