import dbConnect from '../../../lib/dbConect'
import ModelTest1 from '../../../models/Test1'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    // case 'GET':
    //   try {
    //     const test1s = await ModelTest1.find({}) /* find all the data in our database */
    //     res.status(200).json({ success: true, data: test1s })
    //   } catch (error) {
    //     console.log(error)
    //     res.status(400).json({ success: false , error})
    //   }
    //   break
    case 'POST':
      try {
        const test1 = await ModelTest1.create(req.body) /* create a new model in the database */
        res.status(201).json({ success: true, data: test1 })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, error })
      }
      break
    default:
      const test1s = await ModelTest1.find({})
      res.status(400).json({ test1s })
      break
  }
}

