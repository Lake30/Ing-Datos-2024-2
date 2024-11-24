import mongoose, {Schema} from "mongoose";
const productoSchema = new Schema({
    referenciaProducto: String,
    precioProducto: Number,
    estadoProducto: { type: Boolean, default: true },
    cantidadProducto: Number
})

export const productoModel = new mongoose.model('producto', productoSchema)