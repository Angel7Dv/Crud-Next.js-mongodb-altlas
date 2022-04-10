import dbConnect from '../../../lib/dbConect'
import ModelTest1 from '../../../models/Test1'


//  Detail object doc for CRUD Update Delete and SET

export default async function handler(req, res) {
  const { method, query: { id } } = req

  await dbConnect()

  // GET detail api/test1/:id
  switch (method) {
    case 'GET':
      try {
        const Detailtest1 = await ModelTest1.findById(id) /* create a new model in the database */
        if (!Detailtest1) {
          res.status(444).json({ success: false, error: "no encontrado" })

        }

        res.status(200).json({ success: true, data: Detailtest1 })


      } catch (error) {
        res.status(400).json({ success: false, error: "sadas" })
      }
      break
    // PUT api/movie/:id (modificar un doc con id)
    case "PUT":
      try {
        const Detailtest1 = await ModelTest1.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!Detailtest1) {
          return res.status(404).json({ success: false });
        }

        return res.status(200).json({ success: true, data: Detailtest1 });

      } catch (error) {
        console.log(error)
        return res.status(404).json({ success: false, error });
      }
    case "DELETE":
      try {
        const Detailtest1 = await ModelTest1.findByIdAndDelete(id); // solo requiere un parametro
        if (!Detailtest1) {
          return res.status(404).json({ success: false });
        }

        return res.status(200).json({ success: true, data: Detailtest1 });

      } catch (error) {
        console.log(error)
        return res.status(404).json({ success: false, error });
      }


    default:
      res.status(400).json({ success: false })
      break
  }
}
