import axios from 'axios'

// DIRECT BROWSER URL
// https://dictionaryapi.com/api/v3/references/thesaurus/json/test?key=c212ac04-42cc-42dd-91fa-635bef08991c

// const reqKey = process.env.NEXT_PUBLIC_MW_THESAURUS_KEY;

const axiosConfig = {
    baseURL: 'https://dictionaryapi.com/api/v3/references/thesaurus/json/',
};

export default async (req, res) => {
    const { q, k='c212ac04-42cc-42dd-91fa-635bef08991c' } = req.query;

    const response = await axios.get(
        `${q}?key=${k}`,
        axiosConfig
    );

    res.json(response.data)

    // res.json({
    //     id: response.data[0].meta.uuid,
    //     type: response.data[0].fl,
    //     syns: response.data[0].meta.syns[0],
    //     defs: response.data[0].shortdef,
    //     complete: response.data[0].def[0].sseq[0],
    // });
}


//NEXT_PUBLIC_MW_THESAURUS_KEY=c212ac04-42cc-42dd-91fa-635bef08991c
// NEXT_PUBLIC_MW_LEARNERS_KEY=bb17a7b9-86d8-4cfe-afdb-93eb1e6cda7f

// <?php
//
// function grab_json_definition ($word, $ref, $key) {
// $uri = "https://dictionaryapi.com/api/v3/references/" . urlencode($ref) . "/json/" . urlencode($word) . "?key=" . urlencode($key);
//
//     return file_get_contents($uri);
//   };
//
//   $jdef = grab_json_definition("test", "thesaurus", "c212ac04-42cc-42dd-91fa-635bef08991c");
//
// ?>