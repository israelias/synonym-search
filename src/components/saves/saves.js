import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from "@material-ui/core/Typography";
import { useHistory } from '../../context/words.context'
import { SameSenseShowTotal } from "../counters/counters";
import { ReplaceNodeTags } from "../../helpers/string.helper";
import { groupBySense } from "../../helpers/counters.helper"
import Selection from "./selection";

const useStyles = makeStyles((theme) => ({
    heading: {
        display: 'flex',
        alignItems: "center",
        marginTop: '4px',
        marginBottom: '4px',
        paddingTop: '.8rem',
        paddingBottom: '.4rem',
    },
    wordBoxSubHead: {
        top: '2.5rem',
        backgroundColor: theme.palette.background.default,
        borderBottom: '1px solid',
        paddingLeft: '16px',
        paddingBottom: '.8rem',
        width: '100%',
        position: 'sticky',
        zIndex: 1,
        paddingRight: 16,
        color: theme.palette.text.secondary,
    },
}));

const Saves = () => {
    const classes = useStyles();

    const wordsState = useHistory()

    if (!wordsState || wordsState.length === 0) {
        return <span>Your history will save here.</span>
    }

    const selections = groupBySense(wordsState)

    return (
        <List
            component='ol'
            id='saves-head'>

            {selections.map((selection, index) => (
                <li key={`saves-${index}`}>
                    <div
                        key={`saves-content-${index}`}
                        className={classes.wordBoxSubHead}>
                        <div
                            className={classes.heading}>
                            <Typography
                                variant="body2"
                                component="h3">
                                <ReplaceNodeTags
                                    string={
                                        selection[0]
                                    }
                                />
                            </Typography>
                            <SameSenseShowTotal
                                sense={selection[0]}
                                label={selection[1][0].label}
                            />
                        </div>
                    </div>
                    <ul>
                        <Selection
                            selections={selection[1]}
                        />

                    </ul>
                </li>
            ))}
        </List>
    );
}

export default Saves;