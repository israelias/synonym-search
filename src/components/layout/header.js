import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import PropTypes from "prop-types";
import { useStyles } from "../../styles/layout.styles"

const Header = ({ children }) => {
    const classes = useStyles()
    const trigger = useScrollTrigger();
    return (
        <Slide
            appear={true}
            direction="down"
            in={!trigger}
        >
            <header
                className={classes.header}
            >
                {children}

                <Toolbar/>
            </header>
        </Slide>
    );
}

Header.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Header