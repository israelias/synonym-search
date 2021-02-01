import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography"
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
        position: 'sticky',
        top: 0,
        zIndex: 1,
        paddingRight: 16,
        paddingLeft: 16,
        color: theme.palette.text.secondary,
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
             }) => {

    const classes = useStyles();

    return (
            <article>
                <header
                    key={`head-content-${root}`}
                    className={classes.subheader}>
                    <div
                        className={classes.heading}>
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
                    </div>
                    <SameHeadShowTotal
                        loading={loading}
                        root={root}
                        label={label}
                        uuid={uuid}
                    />
                </header>

                {senses.map((sense, index) => (
                    <Sense
                        key={`sense-${root}-${label}-${index}`}
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

    );
}

export default Root;