import React from 'react'
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
    active: {
        textDecoration: "none",
        backgroundColor: theme.palette.action.hover,
        // display: 'flex',
        color: theme.palette.secondary.light
    },
    inactive: {
        display: "none",
        visibility: "hidden",
    }
}));

function SubString(string, word) {
    const sample = string.split(`{it}${word}{/it}`).join('TEST');

    return (
        <span>
            {string.split(`{it}${word}{/it}`)}
        </span>
    )
}

// returns an array of two substrings

function splitStringByHeadWord(string, word) {
    return string.split(`{it}${word}{/it}`)
}

// returns a new string joined by the new word

function joinStringByOptionWord(substring, option) {
    return substring.join(option)
}

const Display = ({
                     sampleString,
                     optionWord,
                     headWord
                 }) => {
    const classes = useStyles()
    const subString = splitStringByHeadWord(sampleString, headWord)
    const sub_1 = subString[0]
    const sub_2 = subString[1]

    return (
        <Box component='span'>
            <span>{
                sub_1
            }</span>
            <Link
                to={optionWord}
                key={optionWord}
                activeClass={classes.active}
                inactiveClass={classes.inactive}
                spy={true}
                hashSpy={true}
                isDynamic={true}
                offset={-200}
            >
                <span
                    className={classes.active}>{
                        optionWord
                    }</span>
            </Link>
            <span>{
                sub_2
            }</span>
        </Box>
    )
}

export default Display
