import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from '@material-ui/core/ListSubheader'
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import { SameSenseShowTotal } from "../../helpers/counters.helper"
import { ReplaceNodeTags } from "../../helpers/string.helper"
import Display from "../shared/string-display"
import Option from "./option"

const useStyles = makeStyles((theme) => ({
    ul: {
        width: '100%',
        backgroundColor: 'inherit',
        padding: 0,
        position: 'relative',
    },
    wordBoxSubHead: {
        top: '2.5rem',
        backgroundColor: theme.palette.background.default,
        borderBottom: '1px solid',
        paddingLeft: '16px',
        paddingBottom: '.8rem',
        width: '100%',
    },
    heading: {
        display: 'flex',
        alignItems: "center",
        width: '100%',
        justifyContent: "space-between",
        marginTop: '4px',
        marginBottom: '4px',
        paddingTop: '.8rem',
        paddingBottom: '.4rem',
    },
}));

const Sense = ({
                   loading,
                   index,
                   sense,
                   onSelectionChange,
                   root,
                   label,
                   uuid
               }) => {

    const classes = useStyles();

    const [optionWord, setOptionWord] = useState(root)

    const onScrollTrigger = word => setOptionWord(word)

    const onMouseOver = word => setOptionWord(word)

    const onChange = value => onSelectionChange(value)

    return (

        <Box
            component='section'>
                <ListSubheader
                    component="div"
                    className={classes.wordBoxSubHead}
                    id={sense[0][1].dt[0][1]}
                >
                    <Box className={classes.heading}>
                        <Typography
                            variant="body2"
                            component="h5">
                            <ReplaceNodeTags
                                string={
                                    sense[0][1].dt[0][1]
                                }
                            />
                        </Typography>
                        <SameSenseShowTotal
                            loading={loading}
                            sense={sense[0][1].dt[0][1]}
                            label={label}
                        />
                    </Box>
                    {sense[0][1].dt[1] &&
                        <Display
                            key={`display-${sense[0][1].dt[1][1][0].t}`}
                            sampleString={sense[0][1].dt[1][1][0].t}
                            optionWord={optionWord}
                        />
                    }
                </ListSubheader>

            <ul
                className={classes.ul}
            >
                {
                    sense[0][1].syn_list &&
                    <Option
                        key={`synonyms-of-${root}`}
                        loading={loading}
                        options={sense[0][1].syn_list[0]}
                        definition="Synonyms"
                        root={root}
                        label={label}
                        uuid={uuid}
                        sense={sense[0][1].dt[0][1]}
                        onMouseOver={onMouseOver}
                        onChange={onChange}
                        onScrollTrigger={onScrollTrigger}
                    />
                }
                {
                    sense[0][1].rel_list &&
                    <Option
                        key={`related-words-to-${root}`}
                        loading={loading}
                        options={sense[0][1].rel_list[0]}
                        definition="Related Words"
                        root={root}
                        label={label}
                        uuid={uuid}
                        sense={sense[0][1].dt[0][1]}
                        onMouseOver={onMouseOver}
                        onChange={onChange}
                        onScrollTrigger={onScrollTrigger}
                    />
                }
                {
                    sense[0][1].phrase_list &&
                    <Option
                        key={`synonymous-phrases-of-${root}`}
                        loading={loading}
                        options={sense[0][1].phrase_list[0]}
                        definition="Synonymous Phrases"
                        root={root}
                        label={label}
                        uuid={uuid}
                        sense={sense[0][1].dt[0][1]}
                        onMouseOver={onMouseOver}
                        onChange={onChange}
                        onScrollTrigger={onScrollTrigger}
                    />
                }
                {
                    sense[0][1].sim_list &&
                    <Option
                        key={`similar-words-to-${root}`}
                        loading={loading}
                        options={[].concat(sense[0][1].sim_list).flat()}
                        definition="Similar Words"
                        root={root}
                        label={label}
                        uuid={uuid}
                        sense={sense[0][1].dt[0][1]}
                        onMouseOver={onMouseOver}
                        onChange={onChange}
                        onScrollTrigger={onScrollTrigger}
                />
                }
            </ul>
        </Box>
    );
};

export default Sense;