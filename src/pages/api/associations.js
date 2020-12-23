import axios from "axios";
import URLSearchParams from "url-module"

// const api = process.env.NEXT_PUBLIC_X_RAPID_API_KEY;

// const options = {
//     url: '/associations/',
//     method: 'GET',
//     baseURL: 'https://twinword-word-associations-v1.p.rapidapi.com',
//     params: {entry: 'capable'},
//     headers: {
//         'x-rapidapi-key': api,
//         'x-rapidapi-host': 'twinword-word-associations-v1.p.rapidapi.com'
//     }
// };

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });

//https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=sound"

const axiosConfig = {
    // url: '/associations/',
    method: 'GET',
    baseURL: 'https://twinword-word-associations-v1.p.rapidapi.com/associations/',
    // params: {entry: {query}},
    headers: {
        // 'x-rapidapi-key': 'process.env.NEXT_PUBLIC_X_RAPID_API_KEY',
        'x-rapidapi-key': 'f0824ef05dmsh55b3a496c3722e9p1d9397jsnce7b62d4ddc5',
        'x-rapidapi-host': 'twinword-word-associations-v1.p.rapidapi.com'
    }
};

export default async (req, res) => {
    // query needs to be read from the internal caller params...
    const {q} = req.params
    // const q = req.query;
    // const q = req.body

    const response = await axios.get(
        `?entry=${q}`,
        // req,
        axiosConfig
    );

    res.json(response.data);
}

//http://localhost:3000/api/associations?entry=capable