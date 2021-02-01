import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { useDispatchHistory } from "../../context/words.context";

const Selection = ({
                    selections
                }) => {

    const wordsDispatch = useDispatchHistory()

    return (
        <>
            {selections.map((selection) => (
                <ListItem
                    component="li"
                    key={`selection-${selection.name}`}
                >
                    <Chip
                        color="default"
                        variant="outlined"
                        size="small"
                        label={selection.name}
                        onDelete={() => {
                            wordsDispatch({
                                type: 'remove',
                                id: selection.id
                            });
                        }}
                        avatar={
                            <Avatar>{
                                selection.value > 0 && selection.value
                            }</Avatar>
                        }
                    />
                </ListItem>

            ))}
        </>
    );
};

export default Selection;