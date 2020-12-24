import axios from 'axios';
import { axiosGetCancellable } from "../helpers/axios.helper";

// Sample URL endpoint
//https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=sound"

const axiosConfig = {
    // url: '/associations/',
    method: 'GET',
    baseURL: 'https://twinword-word-associations-v1.p.rapidapi.com/',
    // params: {entry: 'capable'},
    headers: {
        // 'x-rapidapi-key': process.env.NEXT_PUBLIC_X_RAPID_API_KEY,
        'x-rapidapi-key': 'f0824ef05dmsh55b3a496c3722e9p1d9397jsnce7b62d4ddc5',
        'x-rapidapi-host': 'twinword-word-associations-v1.p.rapidapi.com'
    }
};

function searchAssociations(searchText, selection) {

    // Define `query` to hold the value of either searchText or selection but not both.
    const query = selection ? selection : searchText;

    // const query = searchText;


    // If searchSynonym is called from the serverside, we call the external API directly along with our axiosConfig.

    // UNCOMMENT when @fix

    // if (isServer()) {
    //     return axios.get(
    //         `?entry=${query}`,
    //         axiosConfig
    //     );
    // }

    /*
        If searchSynonym is called from the clientside, we use our internal API route.
        This merges our authorization params with the cancel config.
        We don't include axiosConfig a this calls to our own directory.
        This happens on the server side, nothing at client side.
        API keys and secrets are fully on the server side and are secured.
        Prepend `api/` to the url call as this is routed to localhost:3000
     */

    // UNCOMMENT when @fix
    // return axiosGetCancellable(`api/associations/?entry=${query}`);

    // TEMPORARY: ALWAYS CALL THE EXTERNAL ENDPOINT AS DYNAMIC ROUTE IS NOT WORKING
    // @ fix
    return axios.get(
        `associations/?entry=${query}`,
        axiosConfig
    );
}

// Evaluates to true if we're running on server.

function isServer() {
    return typeof window === 'undefined';
}

export { searchAssociations };
