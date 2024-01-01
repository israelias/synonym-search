import React from 'react';
import Image from 'next/image';
import { Fab, Link, useMediaQuery } from '@mui/material';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useStyles } from '../../styles/layout.styles';
import { useDispatchTheme } from '../../context/theme.context';

const Logo = ({ url, name, path, darkImage }: {
  url: string;
  name: string;
  path: string;
  darkImage?: string;
}) => {
  const darkSrc = darkImage || path;
  const { darkMode } = useDispatchTheme();
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Fab
      component={Link}
      href={url}
      size="small"
      target="_blank"
      rel="noreferrer"
      className={clsx(matches && classes.large)}
    >
      <Image
        alt={name}
        width={matches ? 50 : 24}
        height={matches ? 50 : 2}
        fill
        src={darkMode ? darkSrc : path}
      />
    </Fab>
  );
};

Logo.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  darkImage: PropTypes.string,
};
export default Logo;
