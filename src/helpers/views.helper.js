import React from "react";

export const TabPanel = ({ children, value, index, ...other }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`panel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                    {children}
                </>
            )}
        </div>
    );
}

export const a11yProps = (index) => {
    return {
        id: `tab-${index}`,
        'aria-controls': `panel-${index}`,
    };
}