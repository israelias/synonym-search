import React, { useReducer } from 'react';
import styles from "../scss/synonym-list.module.scss";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import ListItem from "./shared/list-item";
import Button from "./shared/button";
import style from '../scss/radio-input.module.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

const Saves = ({ words, onItemButtonClick, children }) => {
    const classes = useStyles();
    // const [words, dispatch] = useReducer((state, action) => {
    //     switch (action.type) {
    //         case 'remove':
    //             return state.filter((_, index) => index !== action.index);
    //         case 'clear':
    //             return [];
    //         default:
    //             return state;
    //     }
    // }, []);

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    function deleteListItem(word) {
        // words.filter(item => item !== word);
        words.filter((_, index) => index !== word.id)
    }

    if (!words || words.length === 0) {
        return (
            <div>
                <span className={styles.message}>Everything you select will save here.</span>
            </div>
        )
    }

    return (
        <div>
            <ul className={styles.synonymList}>
               {words.map((word, index) => (
                    <ListItem
                        id={index}
                        key={word.id}
                        word={word}
                        value="1"
                        onDelete={handleDelete(word)}>
                    </ListItem>
                ))}
            </ul>
            {children}
        </div>
    );
}

export default Saves;
