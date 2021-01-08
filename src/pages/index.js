import Head from 'next/head'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
// import styles from '../scss/index.module.scss'
import Search from '../components/search'
import Results from './../components/results'
import Saves from './../components/saves'
import { searchThesaurus } from '../services/mwThesaurusService'
import { randomTerm } from '../helpers/random.helper'
import { useState, useEffect, useReducer, useRef, useCallback } from 'react'
import { PREVIOUSWORDS } from '../constants/words.constant';
import { useInView } from 'react-intersection-observer'
import React from 'react'

const Index = ( props, allSavedWords ) => {

  /*
    Add local states to state variables via useState Hooks, which adds
    state and lifecycle features to this otherwise 'stateless' function component.

    The following destructured arrays contain the pairs returned by its Hook.
    The first is the current state value (props from imported components),
    the second is a function that lets us update that state value.
    We will call this function from an event handler further below.
   */

  const inputRef = useRef();

  /*
    `searchText` state variable.

    Initialize `searchText` to hold an initial value from our SeverSideProps,
    Declare `setSearchText` to be the function that updates its state.
   */

  const [searchText, setSearchText] = useState(props.searchText)

  /*
    `selection` state variable.

    Initialize `selection` to hold an initial value of an empty string,
    Declare `setSelection` to be the function that updates its state.
   */

  const [selection, setSelection] = useState('')

  /*
    `synonyms` state variable.

    Initialize `synonyms` to hold an initial value from our ServerSideProps,
    Declare `setSynonyms` to be the function that updates its state.
   */
  const [synonyms, setSynonyms] = useState(props.synonyms)

  /*
    `loading` state variable.

    Initialize `loading` to hold an initial value of false,
    Declare `setLoading` to be the function that updates its state.
   */

  const [loading, setLoading] = useState(false);

  const[savedWords, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return [
            ...state,
          {
            id: state.length,
            name: action.name
          }
        ];
      case 'remove':
        return state.filter((_, index) => index !== action.index);
      case 'clear':
        return [];
      default:
        return state;
    }
  },[]);

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
    setSearchText(text);
    if (text) {
      loadSynonyms(text, selection);
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
    setSearchText(selection);
    if (typeof selection === 'string') {
      loadSynonyms(selection);
      dispatch({
        type: 'add',
        name: selection
      })
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
    setLoading(true);
    const res = await searchThesaurus(searchText, selection);
    // setSynonyms(res.data.associations_array);

    // There is no value in res yet because of cancelConfig helper.
    // If there's a response and there's data in the response, set loading to false and load words.

    if (res && res.data) {
      setLoading(false);
      setSynonyms(res.data[0].meta.syns.flat());
    }
  }

  const onItemButtonClick = () =>
      dispatch({type: 'remove', index});

  return (
    <>
      <Head>
        <title>Synonym Chaser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container spacing={3}>
        <Grid item xs={1} sm={3}
        >
          <Saves
              words={savedWords}>
            <button
                className="button is-small"
                onClick={() => dispatch({type: 'clear'})}>
              Clear
            </button>

          </Saves>

        </Grid>

        // var(--main-padding-top) var(--main-padding-right) var(--main-padding-bottom) var(--main-padding-left)


        // padding: calc(8rem - 1.6rem);
        // padding-top: 0.8rem;
        // padding-right: 1.6rem;
        // padding-bottom: 1.2rem;
        // font-size: 14px;

        // on mobile .8rem padding all around



        <Grid item component='main' xs={12} sm={9} spacing={3}>
          <header>
            <h1>
              Welcome to <a href="https://nextjs.org">Synonym Chaser!</a>
            </h1>

            <Search
                searchText={searchText}
                onSearchTextChange={onSearchTextChange}
            />


          </header>


          <Results
              loading={loading}
              synonyms={synonyms}
              selection={selection}
              onSelectionChange={onSelectionChange}
              value={selection}
              ref={inputRef}
          />

          <footer>
            Footer
          </footer>


        </Grid>

      </Grid>

    </>
  )
}

export const getServerSideProps = async () => {
  const searchText = randomTerm();
  // const resA = await searchAssociations(searchText);
  const res = await searchThesaurus(searchText);
  console.log(res)
  const synonymArrays = res.data[0].meta.syns;
  const numberOfDefs = synonymArrays.length;
  const flattenedSynonymArrays = [].concat.apply([], synonymArrays);
  return {
    props: {
      searchText: searchText,
      numberOfDefs: res.data[0].meta.syns[0].length,
      synonyms: flattenedSynonymArrays,
      // synonyms: res.data[0].meta.syns[0],
      thesaurus: {
        id: res.data[0].meta['uuid'],
        type: res.data[0].fl,
        syns: res.data[0].meta.syns[0],
        defs: res.data[0].shortdef,
        complete: res.data[0].def[0].sseq[0]
      }
    }
  };
};

export default Index;
