import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fade from "@material-ui/core/Grow";
import React from "react";

const HeaderElements = ({props, children}) => {
    const trigger = useScrollTrigger();
    return (
        <Fade appear={true} direction="left" in={!trigger}>
            <div>{children}</div>
        </Fade>
    );
}

export default HeaderElements