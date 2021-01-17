import { RESULTS } from '../../constants/words.constant'

export default function testHandler(req, res) {
    const results =[...RESULTS]
    res.status(200).json(results)
}