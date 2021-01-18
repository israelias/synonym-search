import axios from 'axios'
import { axiosGetCancellable } from "../helpers/axios.helper";
import qs from 'query-string'

const reqKey = process.env.NEXT_PUBLIC_MW_THESAURUS_KEY;

const axiosConfig = {
    baseURL: 'https://dictionaryapi.com/api/v3/references/',
};

function searchThesaurus(searchText, selection) {
    const query = selection ? selection : searchText;
    const key = 'c212ac04-42cc-42dd-91fa-635bef08991c';

    // const fetcher = url => fetch(url).then(res => res.json());
    // const { data, error } = useSWR("/api/thesaurus", fetcher);
    return axios.get(`thesaurus/json/${query}?key=${key}`, axiosConfig)

    // if (isServer()) {
        // const { word } = axios.get(`${query}?key=${key}`, axiosConfig)
        //     .then((response) => {
        //         word.id = response.data[0].meta.uuid;
        //         word.type = response.data[0].fl;
        //         word.syns = response.data[0].meta.syns[0];
        //         word.defs = response.data[0].shortdef;
        //         word.complete = response.data[0].def[0].sseq[0];
        // })
        // return axios.get(`thesaurus/json/${query}?key=${key}`, axiosConfig);
    // }

    // return axiosGetCancellable(`/api/thesaurus/${query}?key=${key}`);

    // if (isServer()) {
    //     return axios.get(`${query}?key=${key}`, axiosConfig);
    // }
    // return axiosGetCancellable(`api/thesaurus/json/${query}?key=${key}`);
}

function getDefinition(word) {
    return axios.get(`repositories/${id}`, axiosConfig);
}

// evaluates to true if we're running on server
function isServer() {
    return typeof window === 'undefined';
}

export { searchThesaurus };