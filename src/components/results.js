import React from "react";
import RadioInput from "./shared/radio-input"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import styles from './../scss/synonym-list.module.scss';

const reStyles = {
    root: {
        position: 'relative',
        // padding: '0 30px',
    },
    senseBox: {
        display: 'flex',
        flex: '0 0 100%',
        position: 'relative',
        marginBottom: '1.5rem',
    },
    senseWrap: {
        display: 'flex',
        alignItems: 'center',
        paddingRight: '1rem',
        borderLeftWidth: '1px',
        borderLeftColor: '#000',
        borderLeftStyle: 'solid',
        flex: '1',
        padding: '0 1rem 0 1rem',
        // position: 'relative'
    },
    senseIndex: {
        position: 'absolute',
        // bottom: '0',
        left: '-1em',
        top: '20%'
    },

    senseLabel: {
        position: 'absolute',
        bottom: '0',
        left: '-.2em',
        direction: 'ltr',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        height: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textOrientation: 'mixed',
        writingMode: 'vertical-lr',
        transformOrigin: '0',
        transform: 'rotate(180deg)',
        fontSize: '9px',
        color: '#000',
        transition: '.3 ease .3'
    },
    labelSpan: {
        // writingMode: 'vertical-lr',
    }
};
//height: 100%;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     -webkit-text-orientation: mixed;
//     text-orientation: mixed;
//     -ms-writing-mode: tb-lr;
//     writing-mode: vertical-lr;
//     transform-origin: 0;
//     transform: rotate(180deg);

const Results = ({result, onSelectionChange, className}) => {
    const resultsClass = className ? className : '';
    const synonymSet = result.meta.syns
    const definitionSet = result.shortdef

    /* Pair shortdef with syn
       So we get an object like so:
       {shortdef: [syns]}
     */

    const senseSet = Object.entries(
        synonymSet.reduce(
            function (pairedSet, field, index) {
                pairedSet[definitionSet[index]] = field;
                return pairedSet;
            }, {}
        )
    )

    // const senses = synonymSet.reduce(function (senses, field, index) {
    //     senses[definitionSet[index]] = field;
    //     return senses;
    // }, {})

    // Object.entries(syns.reduce(function (thisList, field, index) {
    //     thisList[defs[index]] = field;
    //     return thisList;
    // }, {}))


    return (
        <div style={reStyles.root} id={result.meta.uuid}>
            {senseSet.map((sense, index) => (
                <Box key={index} style={reStyles.senseBox}>
                    <Box style={reStyles.senseWrap}>
                        <Typography style={reStyles.senseIndex}>
                            {index}
                        </Typography>
                        <Typography style={reStyles.senseLabel}>
                            {sense[0]}
                        </Typography>

                        <RadioInput
                            className={styles.synonymSelect}
                            options={sense[1]}
                            definition={sense[0]}
                            onChange={(value) => onSelectionChange(value)}
                        />
                    </Box>
                </Box>
            ))}
        </div>
    );
};

export default Results;