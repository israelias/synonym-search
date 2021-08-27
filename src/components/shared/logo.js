import React from 'react';
import Image from 'next/image';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fab from '@material-ui/core/Fab';
import Link from '@material-ui/core/Link';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useStyles } from '../../styles/layout.styles';
import { useDispatchTheme } from '../../context/theme.context';

const Logo = ({ url, name, path, darkImage }) => {
  const darkSrc = darkImage || path;
  const viewDispatch = useDispatchTheme();
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
        src={viewDispatch.darkMode ? darkSrc : path}
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
