import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import { useDispatchHistory } from "../context/words.context";
import { useTheme, makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ListItemText from "@material-ui/core/ListItemText";
import { SameWordShowTotal } from "../helpers/counters.helper"
import { InView } from "react-intersection-observer";

const useStyles = makeStyles((theme) => ({
    view: {
        listStyle: 'none'
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
        [theme.breakpoints.up("sm")]: {
            fontSize: "14px",
            lineHeight: 1.2475
        },


    },
}))

const ListItemButton = ({
                            loading,
                            onChange,
                            options,
                            definition,
                            headWord,
                            senseDefinition,
                            headInstance,
                            headLabel,
                            onMouseOver,
                            onScrollTrigger,
                    }) => {
    const classes = useStyles();
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up("sm"))
    const wordsDispatch = useDispatchHistory()

    return (
        <>
            {options.map((option) => (
                <InView
                    as="li"
                    key={`item-${senseDefinition}-${option.wd}`}
                    className={classes.view}
                    threshold={.2}
                    // trackVisibility={true}
                    // delay={100}
                    onChange={
                        (inView, entry) => onScrollTrigger(option.wd)
                    }>
                    <ListItem
                        button
                        component="div"
                        className={classes.wordBox}
                        value={option.wd}
                        id={option.wd}
                        key={option.wd}
                        onMouseOver={(e) => onMouseOver(option.wd)}
                        onClick={() => {
                            wordsDispatch({
                                type: 'add',
                                name: option.wd,
                                headWord: headWord,
                                headLabel: headLabel,
                                headInstance: headInstance,
                                senseDefinition: senseDefinition
                            });
                            onChange(option.wd);
                        }}>

                        <ListItemText
                            primary={option.wd}
                        />

                        <SameWordShowTotal
                            term={option.wd}
                            label={headLabel}
                            definition={senseDefinition}
                            loading={loading}
                        />

                    </ListItem>
                </InView>

            ))}
        </>
    );
};

export default ListItemButton;