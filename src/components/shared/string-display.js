import React from 'react'
import { ReplaceSubStringNode } from "../../helpers/string.helper"
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box'
import Chip from "@material-ui/core/Chip";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';

const useStyles = makeStyles(theme => ({
    active: {
        textDecoration: "none",
        backgroundColor: theme.palette.action.hover,
        // display: 'flex',
        fontWeight: 400,
        color: theme.palette.primary.light,
        transitionProperty: 'width',
        transitionDelay: '100',
    },
    inactive: {
        textDecoration: "none",
        backgroundColor: theme.palette.action.hover,
        // display: 'flex',
        color: theme.palette.primary.light
    },
    display: {
        // fontFamily: 'monospace',
        fontWeight: '300',
        // fontSize: '300',
        lineHeight: '1.1rem',
        // height: "5em",
        color: theme.palette.text.primary,
        paddingTop: '.8rem',
        paddingBottom: '.8rem',
        marginLeft: '16px',
    },
    iconLeft: {
        color: theme.palette.primary.light,
        fontSize: "small",
        marginLeft: '-16px',
        marginRight: '16px',
        borderBottom: '1px solid',
    },
    iconRight: {
        color: theme.palette.primary.light,
        fontSize: "small",
        // marginLeft: '-16px'
    },
}));

const StyledChip = withStyles((theme) => ({
    root: {
        right: '-16px',
        marginRight: '16px',
        marginLeft: '-16px',
    },
    label: {
        display: 'none',
    },
    avatar: {
        marginRight: '2px !important',
        color: theme.palette.primary.light,
        // backgroundColor: theme.palette.primary.light,
    },
    icon: {
        marginRight: '2px !important',
        color: theme.palette.primary.light,
        // backgroundColor: theme.palette.primary.light,
    },
}))(Chip);

function Quotes() {
    return (
        <StyledChip
            variant="outlined"
            color="default"
            size="small"
            icon={<FormatQuoteRoundedIcon />}
            // avatar={<Avatar>Q</Avatar>}
        />
    )
}


const Display = ({
                     sampleString,
                     optionWord,
                 }) => {
    const classes = useStyles()
    const subString = ReplaceSubStringNode(sampleString)
    const sub_1 = subString[0]
    const sub_2 = subString[1]


    return (

        <Box
            component='div'
            spacing={2}
            className={classes.display}
        >
            <FormatQuoteIcon className={classes.iconLeft}/>
            <span>{sub_1}</span>

                <span className={classes.active}>
                    {optionWord}
                </span>

            <span>{sub_2}.</span>
            <FormatQuoteIcon className={classes.iconRight}/>
        </Box>

    )
}

export default Display
