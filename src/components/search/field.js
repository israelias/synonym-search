import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Backdrop from '@material-ui/core/Backdrop';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import { useDispatchTheme } from '../../context/theme.context';
import Input from './input';

const Field = ({
  label,
  // value,
  onChange,
  placeHolder,
  helperText,
  loading,
}) => {
  const theme = useTheme();
  const trigger = useScrollTrigger();
  const [active, setActive] = useState(false);
  const textInput = useRef(null);
  const metaDispatch = useDispatchTheme();
  const { meta } = metaDispatch;
  const { root } = metaDispatch;
  // const {value} = metaDispatch

  const handleSearchButton = () => {
    setActive(true);
    setTimeout(() => {
      textInput.current && textInput.current.focus();
    }, 100);
  };

  const handleClickAway = () => setActive(false);

  const handleBackDrop = () => setActive(false);

  const onKeyPress = () => setActive(false);

  const match = textInput.current ? textInput.current.value === root : false;

  active && trigger ? setActive(false) : null;

  useEffect(() => {
    if (active && match) {
      setTimeout(() => {
        setActive(false);
      }, 2000);
    }
  }, []);

  return (
    <ClickAwayListener
      onClickAway={handleClickAway}
    >
      <>
        <Backdrop
          open={active}
          onClick={handleBackDrop}
        />
        <Fab
          size="small"
          color="primary"
          aria-label="search"
          onClick={handleSearchButton}
          variant={active ? 'extended' : 'round'}
          style={active ? {
            backgroundColor:
                            loading
                              ? theme.palette.warning.main
                              : !meta
                                ? theme.palette.error.main
                                : meta && match
                                  ? theme.palette.success.main
                                  : theme.palette.primary.main,
          } : null}
        >
          <Input
            label={label}
            placeHolder={placeHolder}
            helperText={helperText}
            active={active}
            match={match}
            meta={meta}
            loading={loading}
            textInput={textInput}
            onKeyPress={onKeyPress}
            onChange={onChange}
          />
        </Fab>
      </>
    </ClickAwayListener>
  );
};

Field.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  helperText: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default Field;
