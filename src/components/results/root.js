import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import ListSubheader from '@material-ui/core/ListSubheader';
import { SameHeadShowTotal } from "../../helpers/counters.helper"
import Sense from "./sense"

const useStyles = makeStyles((theme) => ({
    subheader: {
        backgroundColor: theme.palette.background.default,
        borderBottom: '1px solid',
        lineHeight: '2em',
        height: '2em',
        fontSize: '20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    heading: {
        display: 'flex',
        alignItems: "center",
    }
}));

const Root = ({
                  root,
                  label,
                  uuid,
                  senses,
                  loading,
                  selection,
                  onSelectionChange,
                  index
             }) => {

    const classes = useStyles();

    return (
        <li
            key={`head-${index}-${uuid}-${root}`}
            id={`result-${index}-${root}`}>

            <article>
                <ListSubheader
                    component={'header'}
                    key={`head-content-${root}`}
                    className={classes.subheader}>

                    <Box className={classes.heading}>
                        <Typography
                            variant="h6"
                            component="h4">
                            {root},{' '}
                            <Typography
                                variant="h6"
                                component="em">
                                {label}
                            </Typography>
                        </Typography>
                    </Box>
                    <SameHeadShowTotal
                        loading={loading}
                        root={root}
                        label={label}
                        uuid={uuid}
                    />
                </ListSubheader>

                {senses.map((sense, index) => (
                    <Sense
                        key={`sense-${root}-${label}-${index}`}
                        index={index}
                        loading={loading}
                        sense={sense}
                        root={root}
                        uuid={uuid}
                        label={label}
                        onSelectionChange={
                            (value) => onSelectionChange(value)
                        }
                    />
                ))}

            </article>
        </li>
    );
}

export default Root;