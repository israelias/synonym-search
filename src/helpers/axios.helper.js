import axios from 'axios';

/**
 * Helper function cancels unfinished queries.
 *
 * This function is configured with a cancellable Axios token to help reduce
 * the amount of API calls when a searchText param is still being typed by the user.
 *
 * @file    This file defines axiosGetCancellable
 * @since   01.05.21
 * @see     searchThesaurus
 */

/**
 * cancelConfig describes properties of a cancelled request
 * @typedef cancelConfig
 * @property    {object} request
 * @property    {object} cancelToken
 */

/** @type {cancelConfig} */
const cancelConfig = {
  request: null,
  cancelToken: null,
};

/**
 * return a cancellable HTTP request.
 * @param   {string} url        A URL to the API with a query
 * @param   {object} config     Request options (Axios config)
 * @return  {Promise}           Request object with merged options
 */

/** @return {Promise<object>} */
async function axiosGetCancellable(url, config) {
  // If the request is in progress, cancel the new ones.

  if (cancelConfig.request) {
    cancelConfig.request.cancel('canceled');
  }

  // Otherwise, get the reference for the request and save it to the config.

  cancelConfig.request = axios.CancelToken.source();

  // Then save the cancel token.

  cancelConfig.cancelToken = cancelConfig.request.token;

  // Then copy the values from config and merge to this cancelConfig.
  // Works the same way as setState(prevState => { return {...prevState, ...updatedValues}; });
  // in merging update objects.
  // Object.assign is used as we are controlling states in Index via useState hooks and not setState methods.

  Object.assign(cancelConfig, config);

  // This will always throw an uncaught error on the browser, but we expect this.
  // So let the return call run and only catch errors that are not 'canceled'.

  try {
    const res = await axios.get(url, cancelConfig);
    return res;
  } catch (error) {
    if (error.message !== 'canceled') {
      throw error;
    }
  }
}

export { axiosGetCancellable };
