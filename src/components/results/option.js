import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from "@material-ui/core/ListItemText";
import { InView } from "react-intersection-observer";
import { useDispatchHistory } from "../../context/words.context";
import { SameWordShowTotal } from "../counters/counters"

const Option = ({
                    loading,
                    onChange,
                    options,
                    definition,
                    root,
                    sense,
                    uuid,
                    label,
                    onMouseOver,
                    onScrollTrigger,
                    }) => {
    const wordsDispatch = useDispatchHistory()

    return (
        <>
            {options.map((option, index) => (
                <InView
                    as="li"
                    key={`item-${definition}-${index}-${option.wd}`}
                    threshold={.2}
                    trackVisibility={true}
                    delay={100}
                    onChange={
                        (inView, entry) => onScrollTrigger(option.wd)
                    }>
                    <ListItem
                        button
                        component="div"
                        value={option.wd}
                        key={option.wd}
                        onMouseOver={(e) => onMouseOver(option.wd)}
                        onClick={() => {
                            wordsDispatch({
                                type: 'add',
                                name: option.wd,
                                root: root,
                                label: label,
                                uuid: uuid,
                                sense: sense
                            });
                            onChange(option.wd);
                        }}
                    >

                        <ListItemText
                            primary={option.wd}
                        />

                        <SameWordShowTotal
                            term={option.wd}
                            label={label}
                            definition={sense}
                            loading={loading}
                        />

                    </ListItem>
                </InView>

            ))}
        </>
    );
};

export default Option;