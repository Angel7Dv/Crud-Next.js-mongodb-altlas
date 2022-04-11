import mongoose from 'mongoose'

/* Test1Schema will correspond to a collection in your MongoDB database. */
// crea el modelo de la base de datos para que todos los objetos agregados tengan los mismos campos
const WordsShema = new mongoose.Schema({
  word: {
    /* The name of this pet */
    type: String,
    required: [true, 'word required.'],
  }
  // Phrase = Boolean

 
})

export default mongoose.models.word || mongoose.model('word', WordsShema)
// verifica si existe un modelo si no lo crea a partir de el modelo que recien creamos