import mongoose, {Schema} from "mongoose";
const usuarioSchema = new Schema({
    nombreUsuario: String,
    apellidoUsuario: String,
    cargoUsuario: String,
    telefonoUsuario: Number,
    correoUsuario: String,
    cedulaUsuario: String,
    contrasenaUsuario: String,
    fechaNacimientoUsuario: String,
    estadoUsuario: { type: Boolean, default: true }
})

export const usuarioModel = new mongoose.model('usuario', usuarioSchema)