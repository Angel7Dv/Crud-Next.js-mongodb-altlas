import mongoose from 'mongoose'

/* Test1Schema will correspond to a collection in your MongoDB database. */
// crea el modelo de la base de datos para que todos los objetos agregados tengan los mismos campos
const Test1Schema = new mongoose.Schema({
  title: {
    /* The name of this pet */

    type: String,
    required: [true, 'title required.'],
    maxlength: [20, 'title cannot be more than 60 characters'],
  },
  content: {
    /* content of the doc */

    type: String,
    required: [true, 'content required.'],
  },
 
})

export default mongoose.models.test1 || mongoose.model('test1', Test1Schema)
// verifica si existe un modelo si no lo crea a partir de el modelo que recien creamos