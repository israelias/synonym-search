import React, { useEffect, useState } from 'react';
import {GetServerSideProps} from 'next';
import { searchThesaurus } from '../services/mwThesaurusService';
import { randomTerm } from '../helpers/random.helper';

import Layout from '../components/layout/layout';
import Results from '../components/results/results';

const Index = (props: { searchText: string, results: string[] }) => {

  const [searchText, setSearchText] = useState(props.searchText);

  const [selection, setSelection] = useState('');

  const [results, setResults] = useState(props.results);

  const [loading, setLoading] = useState(false);

  const onSearchTextChange = (text: string) => {
    setLoading(true);
    setSearchText(text);
    if (text) {
      loadSynonyms(text);
    }
  };


  const onSelectionChange = (selection: string) => {
    setLoading(true);
    setSearchText(selection);
    setSelection(selection);
    if (typeof selection === 'string') {
      loadSynonyms(selection);
    }
  };

  const loadSynonyms = async (searchText: string, selection: string) => {
    const res = await searchThesaurus(searchText, selection);
    // There is no value in res yet because of cancelConfig helper.
    // If there's a response and there's data in the response, set loading to false and load words.
    if (res && res.data) {
      setLoading(false);
      setResults(res.data);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const value = sessionStorage.getItem('theme');
      if (value !== null) {
        const sessionStore = JSON.parse(value);
        onSearchTextChange(sessionStore.root);
      }
    }
  }, []);

  return (
    <>
      <Layout

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchText = randomTerm();
  const res = await searchThesaurus(searchText);
  if (!res) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      searchText,
      results: res.data,
    },
  };
};

export default Index;
