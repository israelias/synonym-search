import { axiosGetCancellable } from '../helpers/axios.helper';

/**
 * API service function to fetch data from Thesaurus API.
 *
 * This function is configured with axios, (promise based HTTP client),
 * to assemble and deconstruct query variables according to the API's query format.
 *
 * @since  01.05.21
 * @see  axiosGetCancellable
 * @link https://dictionaryapi.com/products/api-collegiate-thesaurus
 */

const axiosConfig = {
  baseURL: 'https://dictionaryapi.com/api/v3/references/',
};

/**
 * return JSON response object.
 * @param   {string} searchText  Typed input query
 * @param   {string} selection   Selected input query
 * @return  {object}             Response object of query
 */

function searchThesaurus(searchText, selection) {
  const query = selection || searchText;
  const key = 'c212ac04-42cc-42dd-91fa-635bef08991c';
  // const key = process.env.MW_THESAURUS_KEY;

  return axiosGetCancellable(
    `/thesaurus/json/${query}?key=${key}`,
    axiosConfig
  );
}

export { searchThesaurus };
