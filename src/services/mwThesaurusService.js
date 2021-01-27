import { axiosGetCancellable } from "../helpers/axios.helper";

const axiosConfig = {
    baseURL: 'https://dictionaryapi.com/api/v3/references/',
};

function searchThesaurus(searchText, selection) {
    const query = selection ? selection : searchText;
    // const key = 'c212ac04-42cc-42dd-91fa-635bef08991c';
    const key = process.env.NEXT_PUBLIC_MW_THESAURUS_KEY;

    // return axios.get(`thesaurus/json/${query}?key=${key}`, axiosConfig)

    return axiosGetCancellable(`/thesaurus/json/${query}?key=${key}`, axiosConfig);

    // if (isServer()) {
    //     return axios.get(`${query}?key=${key}`, axiosConfig);
    // }
    // return axiosGetCancellable(`api/thesaurus/json/${query}?key=${key}`);
}

// evaluates to true if we're running on server
function isServer() {
    return typeof window === 'undefined';
}

export { searchThesaurus };