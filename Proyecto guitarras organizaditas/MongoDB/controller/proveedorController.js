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
};

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
};

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
};

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
};

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
};


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
};

