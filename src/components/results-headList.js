import React, {useState} from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ResultsDefinitionsList from "./results-definitionsList"
import HeaderContent from "./results-HeaderFeature"

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        backgroundColor: 'inherit',
        position: 'relative',
    },
    subheader: {
        backgroundColor: theme.palette.background.default,
        borderBottom: '1px solid',
        lineHeight: '2em',
        height: '2em',
        fontSize: '20px',
    },
    head: {
        borderBottom: '1px solid'
    },
    listSection: {
        backgroundColor: 'inherit'
    },
    subSection: {
        backgroundColor: 'inherit',
        maxWidth: 'max-width: calc(50% - 5px)',
        flexWrap: 'wrap',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
        position: 'relative',
        // top: '3rem',
    },
    nested: {
        top: '3rem'
    },
    wordBoxSubHead: {
        top: '3rem',
        width: '100%',
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',
        flex: '1',
        paddingLeft: '16px',
        boxSizing: 'border-box',
    },
    textSubHead: {
        whitespace: 'nowrap',
        textOverflow: 'ellipsis',
        minHeight: 'calc(2em + 2px)',
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        borderBottom: '1px solid',
        paddingLeft: 16,

        fontSize: '16px',
        lineHeight: 1.2435,
    },
}));

const ResultsHeadList = (props) => {
    const classes = useStyles();
    const {results, loading, selection, onSelectionChange} = props;

    if (!results || results.length === 0) {
        return <span>No associations found.</span>
    }

    return (

        <List
            component='ol'
            className={classes.root}
            id='results-head'>
            {results.map((result) => (
                <li
                    key={`result-${result.meta.uuid}-${result.hwi.hw}`}
                    className={classes.listSection}>
                    <ul
                        className={classes.ul}>
                        <ListSubheader
                            className={classes.subheader}>
                            <HeaderContent
                                key={
                                    `head-${result.hwi.hw}`
                                }
                                root={
                                    result.hwi.hw
                                }
                                uuid={
                                    result.meta.target ?
                                    result.meta.target.tuuid
                                        : result.meta.uuid
                                }
                            />
                        </ListSubheader>
                        <li
                            className={classes.listSection}>
                            <ResultsDefinitionsList
                                result={
                                    result
                                }
                                headWord={
                                    result.hwi.hw
                                }
                                headInstance={
                                    result.meta.target ?
                                        result.meta.target.tuuid
                                        : result.meta.uuid
                                }
                                headLabel={
                                    result.fl
                                }
                                onSelectionChange={
                                    (value) => onSelectionChange(value)
                                }
                            />
                        </li>
                    </ul>
                </li>
            ))}
        </List>
    );
}

export default ResultsHeadList;