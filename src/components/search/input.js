import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Grow from '@material-ui/core/Grow';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

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
