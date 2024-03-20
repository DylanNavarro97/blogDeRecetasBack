import mongoose, {Schema} from 'mongoose'

const recetaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        maxLength: 50
    },
    imagen: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true,
        enum: ["Sopas", "Carnes", "Pastas", "Salsas", "Ensaladas"]
    },
    descripcionBreve: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    recetaCompleta: {
        type: String,
        required: true,
        minLength: 15,
        maxLength: 700
    },
    listaIngredientes: {
        type: [String],
        required: true
    }
})

const Receta = mongoose.model("receta", recetaSchema)
export default Receta
