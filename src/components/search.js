import React from 'react'
import TextInput from "./shared/text-input";
import Container from '@material-ui/core/Container'

const Search = (props) => {
    const {searchText, onSearchTextChange} = props;

    return (
        <Container>
            <TextInput
                label="Search a Term"
                value={searchText}
                placeholder={searchText}
                helperText="any word..."
                onChange={(value) => onSearchTextChange(value)}
            />
        </Container>
    )
};

export default Search;