import axios from "axios";
import qs from 'querystring'
// import URLSearchParams from "url-module"

// const api = process.env.NEXT_PUBLIC_X_RAPID_API_KEY;

//https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=sound"

const axiosConfig = {
    // url: '/associations/',
    method: 'GET',
    baseURL: 'https://twinword-word-associations-v1.p.rapidapi.com/',
    // params: {
    //      entry: ''
    //      },
    headers: {
        // 'x-rapidapi-key': 'process.env.NEXT_PUBLIC_X_RAPID_API_KEY',
        'x-rapidapi-key': 'f0824ef05dmsh55b3a496c3722e9p1d9397jsnce7b62d4ddc5',
        'x-rapidapi-host': 'twinword-word-associations-v1.p.rapidapi.com',

        // 'content-type': 'application/x-www-form-urlencoded',
        // data: qs.stringify(data),
    }
};


export default async (req='unknowable', res) => {
    // const  q  = qs.stringify(req)
    // const que = {entry: req}
    // const { q } = req.query
    const q = req.query

    const options = {
        params: que,
    }

    // Object.assign(options, axiosConfig);

    const response = await axios.get(
        `associations/?entry=${q}`,
        // req,
        axiosConfig
    );

    res.json(response.data);
}

//http://localhost:3000/api/associations?entry=capable