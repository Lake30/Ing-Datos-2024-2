import mongoose, {Schema} from "mongoose";
const proveedorSchema = new Schema({
    nombreProveedor: String,
    telefonoProveedor: String,
    correoProveedor: String,
    contactoPrincipalProveedor: String,
    paisOrigenProveedor: String,
    estadoProveedor: { type: Boolean, default: true }
})

export const proveedorModel = new mongoose.model('proveedor', proveedorSchema)