import axios from 'axios'

const axiosConfig = {
  baseURL: 'http://thesaurus.altervista.org/thesaurus/v1'
}

export default async (req, res) => {

  // Set the default constants for each request and call their values via default keywords in the query.

  const wordKey = process.env.NEXT_PUBLIC_API_KEY;
  // const wordKey = '3bNeZozwdybX2kCmeL5D';
  const wordOutput = 'json';
  const wordLang = 'en_US';

  // The query needs to be read from the internal caller params.

  const { word, language=wordLang, key=wordKey, output=wordOutput } = req.query;

  // http://thesaurus.altervista.org/thesaurus/v1?word=capable&language=en_US&key=3bNeZozwdybX2kCmeL5D&output=json
  //?word=capable&language=en_US&key=3bNeZozwdybX2kCmeL5D&output=json

  // A sample request url:
  // http://thesaurus.altervista.org/thesaurus/v1?word=peace&language=en_US&key=test_only&output=json
  // .items from before is .response
  // .response will return a list of objects
  // .response .list.category returns noun
  // .response.list.synonyms returns "word (generic term)|war (antonym)"

  const response = await axios.get(
      `?word=${word}&language=${language}&key=${key}output=${output}`,
      axiosConfig
  );

  res.json(response.data);
}
