import React, { useState } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ResultsDefinitionsList from "./results-definitionsList"
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { SameHeadShowTotal } from "../helpers/counters.helper"


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
        // backgroundColor: 'inherit',
        listStyle: 'none'
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

const ResultsHeadList = ({
                             root,
                             label,
                             uuid,
                             senses,
                             loading,
                             selection,
                             onSelectionChange, index
                         }) => {

    const classes = useStyles();

    return (
            <li
                // key={`result-${uuid}-${root}`}
                key={`head-${index}-${root}`}
                id={`result-${uuid}`}
                className={classes.listSection}>

                {/*<ul className={classes.ul}>*/}
                    <ListSubheader
                        component={'div'}
                        key={`head-content-${root}`}
                        className={classes.subheader}>
                        <ListItemIcon className={classes.icon}>
                            <ListItemText
                                primary={
                                    <span><strong>{root}</strong>, <em>{label}</em></span>
                                }
                            />
                            <SameHeadShowTotal
                                loading={loading}
                                root={root}
                                label={label}
                                uuid={uuid}
                            />
                        </ListItemIcon>
                    </ListSubheader>
                    {/*<li className={classes.listSection}>*/}
                        <div
                            // className={classes.root}
                            key={`sub-${uuid}-${root}`}
                            id={`sub-${uuid}-${root}`}
                            // subheader={<li/>}
                        >
                            {senses.map((sense, index) => (

                                    <ResultsDefinitionsList
                                        key={`res-def-${root}-${label}-${index}`}
                                        loading={loading}
                                        sense={
                                            sense
                                        }
                                        headWord={
                                            root
                                        }
                                        headInstance={
                                            uuid
                                        }
                                        headLabel={
                                            label
                                        }
                                        onSelectionChange={
                                            (value) => onSelectionChange(value)
                                        }
                                    />

                            ))}
                        </div>
                    {/*</li>*/}
                {/*</ul>*/}

            </li>


    );
}

export default ResultsHeadList;