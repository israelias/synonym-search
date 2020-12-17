import Head from 'next/head'
import styles from '../scss/index.module.scss'
import Search from '../components/search'
import Results from './../components/results'
import { searchAssociations } from '../services/wordAssociationsService'
import { randomTerm } from '../helpers/random.helper'
import { useState } from 'react'

const Index = (props) => {

  const [searchText, setSearchText] = useState(props.searchText)
  const [selection, setSelection] = useState('')
  const [synonyms, setSynonyms] = useState(props.synonyms)
  const [loading, setLoading] = useState(false);

  const onSearchTextChange = (text) => {
    // Calculate the argument text, not the searchText function until load terms below
    setSearchText(text);
    // Before loading words, check if text is empty.
    if (text) {
      loadSynonyms(text);
    }
  };

  const onSelectionChange = (selection) => {
    // will take the closest language from the function arguments
    setSelection(selection);
    loadSynonyms(selection);
  };

  const loadSynonyms = async (searchText) => {
    setLoading(true);
    const res = await searchAssociations(searchText);

    // There is no value in res yet because of cancelConfig helper.
    // If there's a response and there's data in the response, set loading to false and load words.

    if (res && res.data) {
      setLoading(false);
      setSynonyms(res.data.items);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Synonym Chaser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Synonym Chaser!</a>
        </h1>

        <p className={styles.description}>
          The endless Thesaurus searcher! Type your word!
        </p>

        <Search
            searchText={searchText}
            onSearchTextChange={onSearchTextChange}
        />

        <Results
            loading={loading}
            synonyms={synonyms}
            selection={selection}
            onSelectionChange={onSelectionChange}
        />


        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export const getServerSideProps = async () => {
  const searchText = randomTerm();
  const res = await searchAssociations(searchText);
  return {
    props: {
      searchText: searchText,
      synonyms: res.data.items
    }
  };
};

export default Index;
