import dbConnect from '../../../lib/dbConnect'
import WordsModel from '../../../models/words'

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    // /api/words
    switch (method) {
        case 'GET':
            try {
                const words = await WordsModel.find({}) /* find all the data in our database */
                res.status(200).json({ success: true, data: words })
            } catch (error) {
                console.log(error)
                res.status(400).json({ success: false, error })
            }
            break
        case 'POST':
            try {
                const word = await WordsModel.create(req.body) /* create a new model in the database */
                res.status(201).json({ success: true, data: word })
            } catch (error) {
                console.log(error)
                res.status(400).json({ success: false, error })
            }
            break
        default:
            const words = await WordsModel.find({})
            res.status(400).json({ words })
            break
    }
}
