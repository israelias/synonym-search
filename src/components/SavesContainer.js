import React, {useReducer} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Saves from './../components/saves'
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import ListItem from "./shared/list-item";
import Button from "./shared/button";

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography'

function HideOnScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({target: window ? window() : undefined});

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

const SavesContainer = ({ words, onItemButtonClick, children }) => {
    const classes = useStyles();

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    function deleteListItem(word) {
        // words.filter(item => item !== word);
        words.filter((_, index) => index !== word.id)
    }

    if (!words || words.length === 0) {
        return (
            <div>
                <span className={styles.message}>Everything you select will save here.</span>
            </div>
        )
    }

    return (
        <>
            <Typography variant="h1" component="h2">
                h1. Heading
            </Typography>
            <Saves
                words={savedWords}>
                <button
                    className="button is-small"
                    onClick={() => dispatch({type: 'clear'})}>
                    Clear
                </button>

            </Saves>
        </>
    );
}

export default SavesContainer;
