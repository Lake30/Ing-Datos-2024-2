import { usuarioModel } from "../model/usuarioModel.js";

export const insertarUsuario = async (peticion, respuesta) => {
    try{

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
    const { cargoUsuario } = peticion.body;  // Captura el cargo desde el cuerpo de la solicitud
    try {
        const usuarios = await usuarioModel.find({ cargoUsuario }).select('_id');  // Busca por cargo y selecciona solo _id
        respuesta.status(200).json({ ids: usuarios });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar los IDs por cargo' });
    }
};

export const consultarIDporCedula = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { cedulaUsuario } = peticion.body;  // Captura el cargo desde el cuerpo de la solicitud
    try {
        const usuarios = await usuarioModel.find({ cedulaUsuario }).select('_id');  // Busca por id y selecciona solo cargo
        respuesta.status(200).json({ id: usuarios });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar los IDs por cedula' });
    }
};

export const consultarTelefonoporID = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { _id } = peticion.body;  // Captura el cargo desde el cuerpo de la solicitud
    try {
        const telefono = await usuarioModel.find({ _id }).select('telefonoUsuario -_id');  // Busca por _id y selecciona solo telefono usuario
        respuesta.status(200).json({ telefono });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar los telefonos por id' });
    }
};

export const consultarCorreoporID = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { _id } = peticion.body;  // Captura el cargo desde el cuerpo de la solicitud
    try {
        const correo = await usuarioModel.find({ _id }).select('correoUsuario -_id');  // Busca por _id y selecciona solo correo  usuario
        respuesta.status(200).json({ correo });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar los correos por id' });
    }
};

export const consultarIDporNombre = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { nombreUsuario } = peticion.body;  // Captura el cargo desde el cuerpo de la solicitud
    try {
        const id = await usuarioModel.find({ nombreUsuario }).select('_id nombreUsuario'); 
        respuesta.status(200).json({ id });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar los id por Nombre' });
    }
};

export const consultarNacimientoporNombre = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { nombreUsuario } = peticion.body;  // Captura el cargo desde el cuerpo de la solicitud
    try {
        const fechaNacimientoUsuario = await usuarioModel.find({ nombreUsuario }).select('_id fechaNacimientoUsuario nombreUsuario');  
        respuesta.status(200).json({ fechaNacimientoUsuario });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar los id por Nombre' });
    }
};
