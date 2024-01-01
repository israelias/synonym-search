import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Grow from '@mui/material/Grow';
import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

/**
 * A text input that responde to the same state hooks as its parent.
 *
 * Changes icon.
 *
 * @see Field
 * @since  1.20.21
 * @file   defines Input
 */

const Input = ({
  active,
  meta,
  loading,
  match,
  textInput,
  onChange,
  onKeyPress,
  placeHolder,
  label,
}) => (
  <>
    {!active && <SearchIcon />}
    <Grow in={active} mountOnEnter unmountOnExit>
      <InputBase
        id="search-input"
        color="secondary"
        size="medium"
        placeholder={placeHolder}
        label={label}
        autoFocus
        fullWidth
        autoComplete="on"
        inputRef={textInput}
        error={!meta}
        inputProps={{ 'aria-label': 'description' }}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            onKeyPress();
            event.preventDefault();
          }
        }}
        startAdornment={
          <InputAdornment position="start">
            {loading ? (
              <HelpOutlineOutlinedIcon />
            ) : !meta ? (
              <ErrorOutlineOutlinedIcon />
            ) : meta && match ? (
              <CheckCircleOutlinedIcon />
            ) : (
              <SearchIcon />
            )}
          </InputAdornment>
        }
      />
    </Grow>
  </>
);

export default Input;
