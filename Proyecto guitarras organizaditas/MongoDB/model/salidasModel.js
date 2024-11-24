import mongoose, {Schema} from "mongoose";
const salidasSchema = new Schema({
    fechaSalida: String,
    cantidadSalida: Number,
    referenciaProductoFK: String,
    cedulaUsuarioFK: String
})

export const salidasModel = new mongoose.model('salidas', salidasSchema)