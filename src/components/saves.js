import React, {useReducer} from 'react';
import styles from "../scss/synonym-list.module.scss";
import RadioInput from "./shared/radio-input";
import ListItem from "./shared/list-item";
import Button from "./shared/button";
import style from '../scss/radio-input.module.scss'

const Saves = ({ words, className, onItemButtonClick, children }) => {

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

    const savesListClass = className ? className : '';

    function deleteListItem(word) {
        // words.filter(item => item !== word);
        words.filter((_, index) => index !== word.id)
    }

    if (!words || words.length === 0) {
        return (
            <div className={savesListClass}>
                <span className={styles.message}>Everything you select will save here.</span>
            </div>
        )
    }

    return (
        <div className={`${savesListClass}`}>
            <ul className={styles.synonymList}>
               {words.map((word, index) => (
                    <ListItem
                        id={index}
                        key={word.id}
                        word={word}>
                        <Button
                            className={style.listItemButton}
                            value={'x'}
                            onClick={deleteListItem(word)}
                        />
                    </ListItem>
                ))}
            </ul>
            {children}
        </div>
    );
}

export default Saves;
