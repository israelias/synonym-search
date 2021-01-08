import React from 'react'
import TextField from '@material-ui/core/TextField';

const TextInput = ({ label, value, onChange, placeHolder, helperText }) => {

    return (
        <div>
            <TextField
                id="standard-full-width"
                label={label}
                style={{margin: 8}}
                placeholder={placeHolder}
                helperText={helperText}
                fullWidth
                margin="normal"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    );
};

export default TextInput;