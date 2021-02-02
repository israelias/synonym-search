import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    header: {
        zIndex: 1200,
        position: 'fixed',
        top: 0,
        display: 'flex',
        width: '100%',
        paddingRight: '0.8rem',
        paddingLeft: '0.8rem',
        paddingTop: '0.8rem',
        backgroundColor: theme.palette.background.default,
        alignItems: 'center',
        flexWrap: 'wrap',
        '@media (min-width:600px)': {
            alignItems: 'unset',
        },
    },
}));

const Header = ({ children }) => {
    const classes = useStyles()
    const trigger = useScrollTrigger();
    return (
        <Slide
            appear={true}
            direction="down"
            in={!trigger}
        >
            <Box
                component="header"
                className={classes.header}
            >
                {children}

                <Toolbar/>
            </Box>
        </Slide>
    );
}

Header.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Header