import React from "react";
import parse from 'html-react-parser';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    active: {
        textDecoration: "none",
        backgroundColor: theme.palette.action.hover,
        // display: 'flex',
        color: theme.palette.primary.light
    },
    display: {
        // fontFamily: 'monospace',
        fontWeight: '300',
        lineHeight: 3,
    }
}));

export const ReplaceNodeTags = ({ string }) => {
    // Replace {it} with <em> and {/it} with </em> no matter what
    return parse(string.replace(/\{it}/g, "<em>").replace(/\{\/it}/g, "</em>"))
}

export const ReplaceSubString = ({ string, word }) => {
    const classes = useStyles()
    // const [ref, inView] = useInView({
    //     threshold: 0,
    // })
    // Replace remove {lquo} and {rduo} no matter what
    const cleanString = string.replace(/\{ldquo}/g, "").replace(/\{rdquo}/g, "")
    // Replace what's between {it} and {/it} with a <> no matter what
    const subString = cleanString.replace(/\{(.+?)\/(.+?)\}/g, "<>")
    const stringArray = subString.split("<>")

    return (
        <Typography variant='body2'>

            <span>{stringArray[0]}</span>

            <em className={classes.active}>{word}</em>

            <span>{stringArray[1]}</span>

        </Typography>
    )
}

export function ReplaceSubStringNode (string) {
    const cleanString = string.replace(/\{ldquo}/g, "").replace(/\{rdquo}/g, "")
    const subString = cleanString.replace(/\{(.+?)\/(.+?)\}/g, "<>")
    return subString.split("<>")
}

export const ReplaceSubStringArray = (string) => {
    const cleanString = string.replace(/\{ldquo}/g, "").replace(/\{rdquo}/g, "")
    const subString = cleanString.replace(/\{(.+?)\/(.+?)\}/g, "<>")
    return subString.split("<>")
}