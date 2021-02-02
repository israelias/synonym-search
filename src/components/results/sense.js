import React, { useState } from "react";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import { SameSenseShowTotal } from "../counters/counters"
import { ReplaceNodeTags } from "../../helpers/string.helper"
import Display from "../shared/string-display"
import Option from "./option"
import {useStyles} from "../../styles/styles"

const Sense = ({
                   loading,
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
        <section>
            <div
                className={classes.wordBoxSubHead}
                id={sense[0][1].dt[0][1]}
            >
                <div className={classes.headingSense}>
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
                </div>
                {sense[0][1].dt[1] &&
                    <Display
                        key={`display-${sense[0][1].dt[1][1][0].t}`}
                        sampleString={sense[0][1].dt[1][1][0].t}
                        optionWord={optionWord}
                    />
                }
            </div>

            <ul>
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
        </section>
    );
};

Sense.propTypes = {
    sense: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.shape({
                    dt: PropTypes.array,
                    phrase_list: PropTypes.array,
                    rel_list: PropTypes.array,
                    syn_list: PropTypes.array,
                    sim_list: PropTypes.array,
                })
            ]),
        )
    ),
    root: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    onSelectionChange: PropTypes.func,
};

export default Sense;