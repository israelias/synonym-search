import React, {useState} from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Collapse from "@material-ui/core/Collapse"
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ResultsDefinitionsList from "./results-definitionsList"
import Slide from '@material-ui/core/Slide';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {SameHeadShowTotal} from "../helpers/counters.helper"


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        backgroundColor: 'inherit',
        position: 'relative',
        [theme.breakpoints.up("sm")]: {
            marginLeft: "8rem",
        }
    },
    subheader: {
        backgroundColor: theme.palette.background.default,
        borderBottom: '1px solid',
        lineHeight: '2em',
        height: '2em',
        fontSize: '20px',
    },
    listSection: {
        backgroundColor: 'inherit'
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
        position: 'relative',
    },
    icon: {
        width: '100%'
    },
}));

const ResultsHeadList = (props) => {
    const classes = useStyles();
    const {results, loading, selection, onSelectionChange} = props;

    if (!results || results.length === 0) {
        return <span>No associations found.</span>
    }

    return (

        <Collapse
            in={!loading}
            // direction="up"
            // mountOnEnter
            // unmountOnExit
               // style={{transitionDelay: '1500ms'}}
        >
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
                                <ListItemIcon className={classes.icon}>
                                    <ListItemText
                                        primary={
                                            <span><strong>{result.hwi.hw}</strong>, <em>{result.fl}</em></span>
                                        }
                                    />
                                    <SameHeadShowTotal
                                        loading={loading}
                                        root={result.hwi.hw}
                                        label={result.fl}
                                        uuid={result.meta.target ?
                                            result.meta.target.tuuid
                                            : result.meta.uuid}
                                    />
                                </ListItemIcon>
                            </ListSubheader>
                            <li
                                className={classes.listSection}>
                                <ResultsDefinitionsList
                                    loading={loading}
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
        </Collapse>
    );
}

export default ResultsHeadList;