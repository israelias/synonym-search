import React, { useState } from 'react';
import { searchThesaurus } from '../services/mwThesaurusService';
import { randomTerm } from '../helpers/random.helper';

import Layout from '../components/layout/layout';
import Results from '../components/results/results';

const Index = (props) => {
  /*
    Add local states to state variables via useState Hooks, which adds
    state and lifecycle features to this otherwise 'stateless' function component.

    The following destructured arrays contain the pairs returned by its Hook.
    The first is the current state value (props from imported components),
    the second is a function that lets us update that state value.
    We will call this function from an event handler further below.
   */

  /*
    `searchText` state variable.

    Initialize `searchText` to hold an initial value from our SeverSideProps,
    Declare `setSearchText` to be the function that updates its state.
   */

  const [searchText, setSearchText] = useState(props.searchText);

  /*
    `selection` state variable.

    Initialize `selection` to hold an initial value of an empty string,
    Declare `setSelection` to be the function that updates its state.
   */

  const [selection, setSelection] = useState('');

  /*
    `synonyms` state variable.

    Initialize `synonyms` to hold an initial value from our ServerSideProps,
    Declare `setSynonyms` to be the function that updates its state.
   */
  const [results, setResults] = useState(props.results);

  /*
    `loading` state variable.

    Initialize `loading` to hold an initial value of false,
    Declare `setLoading` to be the function that updates its state.
   */

  const [loading, setLoading] = useState(false);

  /*
    Define `onSearchTextChange`, the Search component's onChange event handler,
    to accept any text argument.
    Call the `setSearchText` function with the new text passed as arguments.
    Before asynchronously loading synonyms for the new text, ensure the
    text is not empty to avoid errors with our word getter.
    Call `loadSynonyms` with args to load synonyms for `text` and/or the value
    of `selection`.
   */

  const onSearchTextChange = (text) => {
    setLoading(true);
    setSearchText(text);
    if (text) {
      loadSynonyms(text);
    }
  };

  /*
    Define `onSelectionChange`, the Results component's onChange event handler,
    to accept any `selection` argument.
    Call the `setSelection` function with the new selection passed as arguments.
    Call `loadSynonyms` with the args to load synonyms of either `selection` or
    `searchText`
   */

  const onSelectionChange = (selection) => {
    setLoading(true);
    setSearchText(selection);
    setSelection(selection);
    if (typeof selection === 'string') {
      loadSynonyms(selection);
    }
  };

  /*
   Define `loadSynonyms`, the asynchronous function to handle our API calls,
   to accept any `searchText` argument, and any `option` argument.
   Call the `setLoading` function with `true` passed as its argument.
   Declare a response variable to await the result of our `searchAssociations`
   getter with `searchText` and `selection` passed as possible arguments.
   Call `loadSynonyms` with the args to load synonyms of `selection`
   Set loading to false when this is through.
   Set the our `synonyms` state to have the value of the API response by
   passing the results to `setSynonyms`.
  */

  const loadSynonyms = async (searchText, selection) => {
    // setLoading(true);
    const res = await searchThesaurus(searchText, selection);

    // There is no value in res yet because of cancelConfig helper.
    // If there's a response and there's data in the response, set loading to false and load words.

    if (res && res.data) {
      setLoading(false);
      setResults(res.data);
    }
  };

  return (
    <>
      <Layout
        search
        loading={loading}
        searchText={searchText}
        onSearchTextChange={onSearchTextChange}
      >
        <Results
          loading={loading}
          results={results}
          selection={selection}
          onSelectionChange={onSelectionChange}
        />
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  const searchText = randomTerm();
  const res = await searchThesaurus(searchText);
  return {
    props: {
      searchText,
      results: res.data,
    },
  };
};

export default Index;
