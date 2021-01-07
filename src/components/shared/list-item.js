import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from "../../scss/radio-input.module.scss";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    chip: {
        margin: theme.spacing(0.5),
    },
}));

const ListItem = ({ word, value, onDelete, color, variant, size, children }) => {
    const classes = useStyles();
    const itemColor = color ? color : 'secondary';
    const itemVariant = variant ? variant : 'default';
    const itemSize = size ? size : 'medium';

    return (
        <li>
            {children}
            <Chip
                color={itemColor}
                variant={itemVariant}
                size={itemSize}
                label={word.name}
                onDelete={(e) => onDelete(e.target.value)}
                avatar={<Avatar>{value}</Avatar>}
                className={classes.chip}
            />

        </li>
    );
}

export default ListItem;
