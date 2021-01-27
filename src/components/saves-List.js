import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useHistory, useDispatchHistory } from '../context/words.context'
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { SameSenseShowTotal } from "../helpers/counters.helper";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import ListItemIcon from "@material-ui/core/ListItemIcon";

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
        // top: '3rem',
    },
    wordBox: {
        position: 'relative',
        width: '100%',
        flex: '1',
        paddingLeft: '2px',
        paddingTop: 0,
        paddingBottom: 0,
        boxSizing: 'border-box',

        whitespace: 'nowrap',
        textOverflow: 'ellipsis',
        minHeight: 'calc(2em + 2px)',
        display: 'flex',
        borderBottom: '1px solid',
        paddingRight: 0,
        // fontSize: "18px",
        // lineHeight: 1.2395
        [theme.breakpoints.up("sm")]: {
            fontSize: "14px",
            lineHeight: 1.2475
        }

    },
    icon: {
        width: '100%'
    },
}));

const SavedList = () => {
    const classes = useStyles();
    const wordsState = useHistory()
    const wordsDispatch = useDispatchHistory()

    if (!wordsState || wordsState.length === 0) {
        return <span>Your history will save here.</span>
    }

    const groupBy = wordsState.reduce((result, words) => {
            // console.log("words", words);
            // console.log("result", result);
            result[words.sense] =  [...result[words.sense] || [], words];
            return result
        }, {}
        );

    const listBy = Object.entries(groupBy)
    // console.log(listBy)


    return (
        <>

        <List
            component='ol'
            className={classes.root}
            id='saves-head'>

            {listBy.map((result, index) => (
                <li
                    key={`saves-${index}`}
                    className={classes.listSection}>
                    <ul
                        className={classes.ul}>
                        <ListSubheader
                            // className={classes.subheader}
                        >
                            <ListItemIcon className={classes.icon}>
                                <ListItemText
                                    primary={result[0]}
                                />
                                <SameSenseShowTotal
                                    // loading={loading}
                                    sense={result[0]}
                                    label={result[1][0].label}
                                />
                            </ListItemIcon>
                        </ListSubheader>
                        {result[1].map((word, i) => (
                            <ListItem
                                component="li"
                                className={classes.wordBox}
                            >
                                <Chip
                                    color="default"
                                    variant="outlined"
                                    size="small"
                                    label={word.name}
                                    onDelete={() => {
                                        wordsDispatch({
                                            type: 'remove',
                                            index: index
                                        });
                                    }}
                                    avatar={
                                        <Avatar>{word.value > 0 && word.value}</Avatar>}
                                    className={classes.chip}
                                />


                            </ListItem>
                        ))}

                    </ul>
                </li>
            ))}
        </List>
        </>
    );
}

export default SavedList;