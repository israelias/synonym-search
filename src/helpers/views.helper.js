import React from 'react';

export const TabPanel = ({ children, value, index, ...other }) => {
  return value === index ? (
    <section
      role="tabpanel"
      hidden={value !== index}
      id={`panel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {children}
    </section>
  ): null;
};

export const a11yProps = (index) => {
  return {
    id: `tab-${index}`,
    'aria-controls': `panel-${index}`,
  };
};
