import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Logo from "../shared/logo";
import { useStyles } from "../../styles/layout.styles";

const Brands = ({ children }) => {
    const classes = useStyles()
    const matches = useMediaQuery('(min-width:600px)');
    const [active, setActive] = useState(false)

    return (
        <AvatarGroup
            className={
                clsx(
                    classes.avatarGroup, active ?
                        classes.active :
                        classes.inactive
                )
            }
            onMouseEnter={() => setTimeout(() => setActive(true), 100)}
            onMouseLeave={() => setTimeout(() => setActive(false), 750)}
        >
            <Logo
                name="React"
                url="https://react.org/"
                path={"/images/reactLogo.png"}
            />
            <Logo
                name="Next JS"
                url="https://nextjs.org/"
                path={"/images/nextJSLogo.svg"}
            />
            <Logo
                name="Material UI"
                url="https://material-ui.com/"
                path="/images/materialUILogo.png"
            />
            <Logo
                name="Code Institute"
                url="https://codeinstitute.net/"
                path="/images/codeInstituteLogo.jpg"
            />
            <Logo
                name="Merriam-Webster"
                url="https://dictionaryapi.com/"
                path="/images/MWLogo_forLightBackgrounds.png"
                darkImage="/images/MWLogo_forDarkBackgrounds.png"
            />
        </AvatarGroup>
    );
}

Brands.propTypes = {
    children: PropTypes.any,
};

export default Brands