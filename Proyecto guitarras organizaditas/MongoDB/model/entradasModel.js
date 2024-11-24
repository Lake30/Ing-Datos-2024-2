import mongoose, {Schema} from "mongoose";
const entradasSchema = new Schema({
    fechaEntrada: String,
    cantidadEntrada: Number,
    referenciaProductoFK: String,
    nombreProveedorFK: String
})

export const entradasModel = new mongoose.model('entradas', entradasSchema)