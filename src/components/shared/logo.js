import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import Link from "@material-ui/core/Link";
import clsx from "clsx";
import { useStyles } from "../../styles/layout.styles"
import { useDispatchTheme } from "../../context/theme.context";

const Logo = ({ url, name, path, darkImage }) => {
    const darkSrc = darkImage ? darkImage : path
    const viewDispatch = useDispatchTheme()
    const classes = useStyles()
    const matches = useMediaQuery('(max-width:576.98px)');

    return (
        <Fab
            component={Link}
            href={url}
            size={"small"}
            target={"_blank"}
            rel={"noreferrer"}
            className={
                clsx(
                    matches && classes.large
                )
            }
        >
            <Avatar
                alt={name}
                src={
                    viewDispatch.darkMode ?
                        darkSrc
                        : path
                }
            />
        </Fab>
    )
}

export default Logo