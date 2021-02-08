import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Logo from '../shared/logo';
import { useStyles } from '../../styles/layout.styles';
import { useDispatchTheme } from '../../context/theme.context';

const Brands = ({ children }) => {
  const classes = useStyles();
  const viewDispatch = useDispatchTheme();
  const [active, setActive] = useState(false);
  const { value } = viewDispatch;

  useEffect(() => {
    if (value === 'info') {
      setTimeout(() => {
        setActive(true);
      }, 750);
    }
  }, []);

  return (
    <AvatarGroup
      className={
        clsx(
          classes.avatarGroup, active
            ? classes.active
            : classes.inactive,
        )
      }
    >
      <Logo
        name="React"
        url="https://react.org/"
        path="/images/reactLogo.png"
      />
      <Logo
        name="Next JS"
        url="https://nextjs.org/"
        path="/images/nextJSLogo.svg"
      />
      <Logo
        name="Material UI"
        url="https://material-ui.com/"
        path="/images/materialUILogoLight.png"
        darkImage="/images/materialUILogoDark.png"
      />
      <Logo
        name="Code Institute"
        url="https://codeinstitute.net/"
        path="/images/codeInstituteLogo.png"
      />
      <Logo
        name="Merriam-Webster"
        url="https://dictionaryapi.com/"
        path="/images/merriamWebsterLogoLight.png"
      />
    </AvatarGroup>
  );
};

Brands.propTypes = {
  children: PropTypes.any,
};

export default Brands;
