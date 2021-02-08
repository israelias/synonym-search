import React from 'react';
import Fab from '@material-ui/core/Fab';
import TonalityIcon from '@material-ui/icons/Tonality';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useDispatchTheme } from '../../context/theme.context';

const ToggleTheme = () => {
  const themeDispatch = useDispatchTheme();
  const matches = useMediaQuery('(min-width:600px)');

  const handleClick = () => {
    themeDispatch.setDarkMode(!themeDispatch.darkMode);
  };

  return (
    <Fab
      size="small"
      color="primary"
      aria-label="switch"
      onClick={handleClick}
    >
      <TonalityIcon />
    </Fab>
  );
};

export default ToggleTheme;
