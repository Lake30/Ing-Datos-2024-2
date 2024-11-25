import { proveedorModel } from "../model/proveedorModel.js";

export const insertarProveedor = async (peticion, respuesta) => {
    try{
        let data = peticion.body
        await proveedorModel.create(data)
        let proveedor = await proveedorModel.find()
        respuesta.status(200).json({proveedorModel: proveedor})
    }catch(error){
        console.log(error);
    }
}

export const consultarProveedores = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    try {
      const proveedores = await proveedorModel.find().select('_id nombreProveedor')
      respuesta.status(200).json({ proveedores : proveedores})
    } catch (error) {
      console.error(error);
      respuesta.status(500).json({ message: 'Error al consultar proveedores ' });
    }
}

export const consultarProveedoresActivos = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    try {
      const ProveedoresActivos = await proveedorModel.find({ estadoProveedor:true }).select('_id nombreProveedor')
      respuesta.status(200).json({ ProveedoresActivos : ProveedoresActivos})
    } catch (error) {
      console.error(error);
      respuesta.status(500).json({ message: 'Error al consultar ' });
    }
}

export const consultarCorreoporID = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { _id } = peticion.body; 
    try {
        const correo = await proveedorModel.find({ _id }).select('correoProveedor -_id');  
        respuesta.status(200).json({ correo });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar ' });
    }
}

export const consultarTelefonoporID = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { _id } = peticion.body;  
    try {
        const telefono = await proveedorModel.find({ _id }).select('telefonoProveedor -_id');  
        respuesta.status(200).json({ telefono });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar ' });
    }
}

export const consultarporPaisOrigen = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { paisOrigenProveedor } = peticion.body; 
    try {
        const Proveedor = await proveedorModel.find({ paisOrigenProveedor })
        respuesta.status(200).json({ Proveedor  });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar los proveedores' });
    }
}

export const consultarContactoporID = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { _id } = peticion.body;  
    try {
        const contactoPrincipalProveedor = await proveedorModel.find({ _id }).select('contactoPrincipalProveedor -_id');  
        respuesta.status(200).json({ contactoPrincipalProveedor });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar ' });
    }
}

export const consultarIDporNombre = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { nombreProveedor } = peticion.body;  
    try {
        const _id = await proveedorModel.find({ nombreProveedor }).select('_id ');  
        respuesta.status(200).json({ _id });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar ' });
    }
}

export const consultarContactoporNombre = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { nombreProveedor } = peticion.body;  
    try {
        const contactoPrincipalProveedor = await proveedorModel.find({ nombreProveedor }).select('contactoPrincipalProveedor -_id');  
        respuesta.status(200).json({ contactoPrincipalProveedor });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar ' });
    }
}

export const eliminarProveedor = async (peticion, respuesta) => {
    try {
        let nombreProveedor = peticion.body.nombreProveedor;
        await proveedorModel.deleteOne({ nombreProveedor }); 
        let proveedoresRestantes = await proveedorModel.find(); 
        respuesta.status(200).json({ proveedores: proveedoresRestantes });
    } catch (error) {
        console.log(error);
        respuesta.status(500).json({ mensaje: "Error al eliminar el proveedor" });
    }
}

export const modificarContactoPrincipal = async (peticion, respuesta) => {
    try {
        let { _id, nuevoContacto } = peticion.body;
        await proveedorModel.findByIdAndUpdate(_id, { contactoPrincipalProveedor: nuevoContacto });
        let proveedorActualizado = await proveedorModel.findById(_id); 
        respuesta.status(200).json({ proveedor: proveedorActualizado });
    } catch (error) {
        console.log(error);
        respuesta.status(500).json({ message: 'Error al modificar el contacto principal del proveedor' });
    }
}

export const modificarTelefonoProveedor = async (peticion, respuesta) => {
    try {
        let { _id, nuevoTelefonoProveedor } = peticion.body;
        await proveedorModel.findByIdAndUpdate(_id, { contactoPrincipalProveedor: nuevoTelefonoProveedor });
        let proveedorActualizado = await proveedorModel.findById(_id); 
        respuesta.status(200).json({ proveedor: proveedorActualizado });
    } catch (error) {
        console.log(error);
        respuesta.status(500).json({ message: 'Error al modificar el teléfono del proveedor' });
    }
}

export const modificarEstadoProveedor = async (peticion, respuesta) => {
    try {
        let { _id, nuevoEstadoProveedor } = peticion.body;
        await proveedorModel.findByIdAndUpdate(_id, { estadoProveedor: nuevoEstadoProveedor });
        let proveedorActualizado = await proveedorModel.findById(_id); 
        respuesta.status(200).json({ proveedor: proveedorActualizado });
    } catch (error) {
        console.log(error);
        respuesta.status(500).json({ message: 'Error al modificar el estado del proveedor' });
    }
}

export const modificarCorreoProveedor = async (peticion, respuesta) => {
    try {
        let { _id, nuevoCorreoProveedor } = peticion.body;
        await proveedorModel.findByIdAndUpdate(_id, { correoProveedor: nuevoCorreoProveedor });
        let proveedorActualizado = await proveedorModel.findById(_id); 
        respuesta.status(200).json({ proveedor: proveedorActualizado });
    } catch (error) {
        console.log(error);
        respuesta.status(500).json({ message: 'Error al modificar el correo del proveedor' });
    }
}

export const modificarNombreProveedor = async (peticion, respuesta) => {
    try {
        let { _id, nuevoNombreProveedor } = peticion.body;
        await proveedorModel.findByIdAndUpdate(_id, { nombreProveedor: nuevoNombreProveedor });
        let proveedorActualizado = await proveedorModel.findById(_id); 
        respuesta.status(200).json({ proveedor: proveedorActualizado });
    } catch (error) {
        console.log(error);
        respuesta.status(500).json({ message: 'Error al modificar el nombre del proveedor' });
    }
}