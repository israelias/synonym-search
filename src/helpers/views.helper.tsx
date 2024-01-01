import React from 'react';

export const TabPanel = ({ children, value, index, ...other }: {
  children: React.ReactNode;
  index: string;
  value: string;
  other?: any;
}) => {
  return (
    <section
      role="tabpanel"
      hidden={value !== index}
      id={`panel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </section>
  );
};

export const a11yProps = (index: string) => {
  return {
    id: `tab-${index}`,
    'aria-controls': `panel-${index}`,
  };
};
