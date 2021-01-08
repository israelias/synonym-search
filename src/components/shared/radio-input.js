import React from 'react'
// import styles from '../../scss/radio-input.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const styles = {
    box: {
        position: 'relative',
        borderBottom: '1px solid #000',
        width: '100%',
        display: 'flex',
        alignItems: 'stretch',
        // 768 up its not column
        flexDirection: 'column',
        flex: '1',
        paddingLeft: '2px',
        boxSizing: 'border-box',

        // parent level box
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

        //md up for MAIN.
        fontSize: '16px',
        lineHeight: 1.2435,

        //mobile
        // fontSize: '18px',
        // lineHeight: 1.2395,
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

        // 600px up (should be 768)
        // [theme.breakpoints.up('sm')]: {
        //     fontSize: '13px'
        //     // fontSize: theme.palette.primary.main,
        // },

        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        // border: 0,
        // borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        // color: 'white',
        // height: 48,
        // padding: '0 30px',
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

const RadioInput = ({ value, onChange, options, className }) => {
    const classes = useStyles();
    const radioInputClass = className ? `${className} field` : 'field';

    return (
        <div>
            <div >
                {options.map((option) => (
                    <>
                        <Box component='label'
                             style={styles.box}
                             width={1} borderBottom={1}
                            htmlFor={option}>
                            <Typography style={styles.text}>
                                {option}
                            </Typography>
                            {/*<TextField*/}
                            {/*    component='div'*/}
                            {/*    id="standard-full-width"*/}
                            {/*    label="Label"*/}
                            {/*    style={{margin: 8}}*/}
                            {/*    placeholder="Placeholder"*/}
                            {/*    helperText="Full width!"*/}
                            {/*    fullWidth*/}
                            {/*    margin="normal"*/}
                            {/*    InputLabelProps={{*/}
                            {/*        shrink: true,*/}
                            {/*    }}*/}
                            {/*    variant="outlined"*/}
                            {/*/>*/}
                        </Box>
                        <input
                            // className="radio is-primary"
                            style={styles.input}
                            type="radio"
                            id={option}
                            value={option}
                            name="Radio Options"
                            checked={false}
                            onChange={(e) => onChange(e.target.value)}
                        />
                    </>
                ))}
            </div>

        </div>
    );
};

export default RadioInput;