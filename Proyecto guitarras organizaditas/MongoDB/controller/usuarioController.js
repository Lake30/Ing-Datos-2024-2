import { usuarioModel } from "../model/usuarioModel.js";

export const insertarUsuario = async (peticion, respuesta) => {
    try{
        let data = peticion.body
        await usuarioModel.create(data)
        let usuario = await usuarioModel.find()
        respuesta.status(200).json({usuarioModel: usuario})
    }catch(error){
        console.log(error);
    }
}

export const consultarUsuarios = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    try {
      const usuarios = await usuarioModel.find().select('_id nombreUsuario')
      respuesta.status(200).json({ usuarios : usuarios})
    } catch (error) {
      console.error(error);
      respuesta.status(500).json({ message: 'Error al consultar usuarios ' });
    }
}


export const consultarUsuariosActivos = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    try {
      const usuariosActivos = await usuarioModel.find({ estadoUsuario:true }).select('_id nombreUsuario')
      respuesta.status(200).json({ usuariosActivos : usuariosActivos})
    } catch (error) {
      console.error(error);
      respuesta.status(500).json({ message: 'Error al consultar usuarios activos' });
    }
}

export const consultarIDporCargo = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { cargoUsuario } = peticion.body;  
    try {
        const usuarios = await usuarioModel.find({ cargoUsuario }).select('_id'); 
        respuesta.status(200).json({ ids: usuarios });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar los IDs por cargo' });
    }
}

export const consultarIDporCedula = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { cedulaUsuario } = peticion.body;  
    try {
        const usuarios = await usuarioModel.find({ cedulaUsuario }).select('_id');  
        respuesta.status(200).json({ id: usuarios });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar los IDs por cedula' });
    }
}

export const consultarTelefonoporID = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { _id } = peticion.body;  
    try {
        const telefono = await usuarioModel.find({ _id }).select('telefonoUsuario -_id');  
        respuesta.status(200).json({ telefono });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar los telefonos por id' });
    }
}

export const consultarCorreoporID = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { _id } = peticion.body;  
    try {
        const correo = await usuarioModel.find({ _id }).select('correoUsuario -_id');  
        respuesta.status(200).json({ correo });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar los correos por id' });
    }
}

export const consultarIDporNombre = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { nombreUsuario } = peticion.body;  
    try {
        const id = await usuarioModel.find({ nombreUsuario }).select('_id nombreUsuario'); 
        respuesta.status(200).json({ id });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar los id por Nombre' });
    }
}

export const consultarNacimientoporNombre = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { nombreUsuario } = peticion.body; 
    try {
        const fechaNacimientoUsuario = await usuarioModel.find({ nombreUsuario }).select('_id fechaNacimientoUsuario nombreUsuario');  
        respuesta.status(200).json({ fechaNacimientoUsuario });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar los id por Nombre' });
    }
}

export const eliminarUsuario = async (peticion, respuesta) => {
    try {
        let cedulaUsuario = peticion.body.cedulaUsuario;
        await usuarioModel.deleteOne({ cedulaUsuario }); 
        let usuariosRestantes = await usuarioModel.find(); 
        respuesta.status(200).json({ usuarios: usuariosRestantes });
    } catch (error) {
        console.log(error);
        respuesta.status(500).json({ mensaje: "Error al eliminar el usuario" });
    }
}

export const modificarCargoUsuario = async (peticion, respuesta) => {
    try {
        let { _id, nuevoCargo } = peticion.body;
        await usuarioModel.findByIdAndUpdate(_id, { cargoUsuario: nuevoCargo });
        let usuarioActualizado = await usuarioModel.findById(_id); 
        respuesta.status(200).json({ usuario: usuarioActualizado });
    } catch (error) {
        console.log(error);
        respuesta.status(500).json({ message: 'Error al modificar el cargo del usuario' });
    }
}

export const modificarTelefonoUsuario = async (peticion, respuesta) => {
    try {
        let { _id, nuevoTelefono } = peticion.body;
        await usuarioModel.findByIdAndUpdate(_id, { telefonoUsuario: nuevoTelefono });
        let usuarioActualizado = await usuarioModel.findById(_id); 
        respuesta.status(200).json({ usuario: usuarioActualizado });
    } catch (error) {
        console.log(error);
        respuesta.status(500).json({ message: 'Error al modificar el teléfono del usuario' });
    }
}

export const modificarCorreoUsuario = async (peticion, respuesta) => {
    try {
        let { _id, nuevoCorreo } = peticion.body;
        await usuarioModel.findByIdAndUpdate(_id, { correoUsuario: nuevoCorreo });
        let usuarioActualizado = await usuarioModel.findById(_id); 
        respuesta.status(200).json({ usuario: usuarioActualizado });
    } catch (error) {
        console.log(error);
        respuesta.status(500).json({ message: 'Error al modificar el correo del usuario' });
    }
}

export const modificarEstadoUsuario = async (peticion, respuesta) => {
    try {
        let { _id, nuevoEstado } = peticion.body;
        await usuarioModel.findByIdAndUpdate(_id, { estadoUsuario: nuevoEstado });
        let usuarioActualizado = await usuarioModel.findById(_id); 
        respuesta.status(200).json({ usuario: usuarioActualizado });
    } catch (error) {
        console.log(error);
        respuesta.status(500).json({ message: 'Error al modificar el estado del usuario' });
    }
}

export const modificarContrasenaUsuario = async (peticion, respuesta) => {
    try {
        let { _id, nuevaContrasena } = peticion.body;
        await usuarioModel.findByIdAndUpdate(_id, { contrasenaUsuario: nuevaContrasena });
        let usuarioActualizado = await usuarioModel.findById(_id); 
        respuesta.status(200).json({ usuario: usuarioActualizado });
    } catch (error) {
        console.log(error);
        respuesta.status(500).json({ message: 'Error al modificar la contraseña del usuario' });
    }
}


