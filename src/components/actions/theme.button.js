import React from 'react';
import Fab from '@mui/material/Fab';
import TonalityIcon from '@mui/icons-material/Tonality';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatchTheme } from '../../context/theme.context';

const ToggleTheme = () => {
  const themeDispatch = useDispatchTheme();

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
