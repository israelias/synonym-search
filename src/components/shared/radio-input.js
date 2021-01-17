import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const styles = {
    box: {
        position: 'relative',
        borderBottom: '1px solid #000',
        width: '100%',
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',
        flex: '1',
        paddingLeft: '2px',
        boxSizing: 'border-box',

        maxWidth: 'max-width: calc(50% - 5px)',

    },
    labelBefore: {
        // disappear on mobile
        fontSize: '13px',
        lineHeight: '16px',
        position: 'absolute',
        left: '-1.5em',
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        content: 'attr(data - label)',
        paddingRight: '1em',
        color: 'var (--color - text)',
    },
    text: {
        whitespace: 'nowrap',
        textOverflow: 'ellipsis',
        minHeight: 'calc(2em + 2px)',
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        borderBottom: '1px solid',
        paddingLeft: 0,
        paddingRight: 0,
        fontSize: '16px',
        lineHeight: 1.2435,
    },
    input: {
        visibility: 'hidden',
        position: 'absolute',
    }
};

const useStyles = makeStyles((theme) => ({

    box: {
        position: 'relative',
        borderBottom: '1px solid',
        width: '100%',
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',
        flex: '1',
        paddingLeft: '2px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

    },
    text: {
        whitespace: 'nowrap',
        textOverflow: 'ellipsis',

        fontSize: '11px',
    },
    input: {
        visibility: 'hidden'
    }
}))

const RadioInput = ({ onChange, options, definition }) => {

    return (
        <div>
            <div >
                {options.map((option) => (
                    <div key={`option-${definition}-${option}`}>
                        <Box component='label'
                             style={styles.box}
                             width={1} borderBottom={1}
                            htmlFor={option}>
                            <Typography style={styles.text}>
                                {option}
                            </Typography>
                        </Box>
                        <input
                            style={styles.input}
                            type="radio"
                            id={option}
                            value={option}
                            name={definition}
                            checked={false}
                            onChange={(e) => onChange(e.target.value)}
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default RadioInput;