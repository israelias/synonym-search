import axios from 'axios';
import { axiosGetCancellable } from "../helpers/axios.helper";

const axiosConfig = {
    baseURL: 'http://thesaurus.altervista.org/thesaurus/v1'
}

function searchSynonym(searchText, language) {

    // If no language is requested, default to english.

    const query = {
        word: searchText,
        language: language ? language : 'en_US',
        key: process.env.NEXT_PUBLIC_API_KEY,
        output: 'json'
    }

    // If searchSynonym is called from the serverside, we call the external API directly along with our axiosConfig.

    if (isServer()) {
        return axios.get(
            `?word=${query.word}&language=${query.language}&key=${query.key}&output=${query.output}`,
            axiosConfig
        );
    }

    // If searchSynonym is called from the clientside, we use our internal API route.
    // This merges our authorization params with the cancel config.
    // We don't include axiosConfig a this calls to our own directory.
    // This happens on the server side, nothing at client side.
    // API keys and secrets are fully on the server side and are secured.
    // Prepend `api/` to the url call as this is routed to localhost:3000

    return axiosGetCancellable(`api/?word=${query.word}&language=${query.language}&key=${query.key}&output=${query.output}`);
}

// Evaluates to true if we're running on server.

function isServer() {
    return typeof window === 'undefined';
}

export { searchSynonym };
