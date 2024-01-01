import React from 'react';
import { Fab, useMediaQuery } from '@mui/material';
import TonalityIcon from '@mui/icons-material/Tonality';
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
