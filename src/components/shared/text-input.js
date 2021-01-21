import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));


const TextInput = ({ label, value, onChange, placeHolder, helperText }) => {
    const classes = useStyles()

    return (
        <div>
            <TextField
                id="standard-full-width"
                className={classes.textField}
                label={label}
                // style={{margin: 8}}
                placeholder={placeHolder}
                // helperText={helperText}
                fullWidth
                size="small"
                // margin="dense"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
                // variant="filled"
            />
        </div>
    );
};

export default TextInput;