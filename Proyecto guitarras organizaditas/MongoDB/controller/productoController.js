import { productoModel } from "../model/productoModel.js";

export const insertarProducto = async (peticion, respuesta) => {
    try{
        let data = peticion.body
        await productoModel.create(data)
        let producto = await productoModel.find()
        respuesta.status(200).json({productoModel: producto})
    }catch(error){
        console.log(error);
    }
}

export const eliminarProducto = async (peticion, respuesta) => {
    try {
        let referenciaProducto = peticion.body.referenciaProducto;
        await productoModel.deleteOne({ referenciaProducto }); 
        let productosRestantes = await productoModel.find(); 
        respuesta.status(200).json({ productos: productosRestantes });
    } catch (error) {
        console.log(error);
        respuesta.status(500).json({ mensaje: "Error al eliminar el producto" });
    }
}

export const consultarProductosregistrados = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    try {
      const productos = await productoModel.find().select('_id referenciaProducto')
      respuesta.status(200).json({ productos : productos})
    } catch (error) {
      console.error(error);
      respuesta.status(500).json({ message: 'Error al consultar productos ' });
    }
}
export const consultarGuitarrasZurdas = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    try {
        const GuitarrasZurdas = await productoModel.find({
            referenciaProducto: { $regex: 'zurda', $options: 'i' }  // 'i' hace la búsqueda insensible a mayúsculas
        }).select('_id nombreProveedor referenciaProducto');
        
        respuesta.status(200).json({ GuitarrasZurdas });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar' });
    }
}
export const consultarProductosDisponibles = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    try {
        const productosDisponibles = await productoModel.find({
            estadoProducto: true,         // Filtra productos con estado true
            cantidadProducto: { $gt: 0 }  // Filtra productos con cantidad > 0
        }).select('_id nombreProveedor referenciaProducto cantidadProducto');
        
        respuesta.status(200).json({ productosDisponibles });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar productos disponibles' });
    }
}
export const consultarPrecioporID = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { _id } = peticion.body;  
    try {
        const precio = await productoModel.find({ _id }).select('precioProducto -_id');  
        respuesta.status(200).json({ precio });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar ' });
    }
}
export const consultarCantidadporID = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { _id } = peticion.body;  
    try {
        const cantidadProducto = await productoModel.find({ _id }).select('cantidadProducto -_id');  
        respuesta.status(200).json({ cantidadProducto });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar ' });
    }
}
export const consultarIDporReferencia = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    try {
        const { referenciaProducto } = peticion.body; 
        const regex = new RegExp(referenciaProducto, 'i');  
        const productos = await productoModel.find({
            referenciaProducto: { $regex: regex }  
        }).select('_id referenciaProducto');
        
        respuesta.status(200).json({ productos });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar' });
    }
}
export const consultarProductosconAccesorio = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    try {
        const ProductosconAccesorio = await productoModel.find({
            referenciaProducto: { 
                $regex: 'estuche|afinador',   // estuche o afinador
                $options: 'i'                 
            }
        }).select('_id referenciaProducto');
        
        respuesta.status(200).json({ ProductosconAccesorio });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar' });
    }
}

export const modificarReferenciaProducto = async (peticion, respuesta) => {
    try {
        let { _id, nuevaReferencia } = peticion.body;
        await productoModel.findByIdAndUpdate(_id, { referenciaProducto: nuevaReferencia });
        let productoActualizado = await productoModel.findById(_id); 
        respuesta.status(200).json({ producto: productoActualizado });
    } catch (error) {
        console.log(error);
        respuesta.status(500).json({ message: 'Error al modificar la referencia del producto' });
    }
}

export const modificarPrecioProducto = async (peticion, respuesta) => {
    try {
        let { _id, nuevoPrecio } = peticion.body;
        await productoModel.findByIdAndUpdate(_id, { precioProducto: nuevoPrecio });
        let productoActualizado = await productoModel.findById(_id); 
        respuesta.status(200).json({ producto: productoActualizado });
    } catch (error) {
        console.log(error);
        respuesta.status(500).json({ message: 'Error al modificar el precio del producto' });
    }
}
export const modificarEstadoProducto = async (peticion, respuesta) => {
    try {
        let { _id, nuevoEstado } = peticion.body;
        await productoModel.findByIdAndUpdate(_id, { estadoProducto: nuevoEstado });
        let productoActualizado = await productoModel.findById(_id); 
        respuesta.status(200).json({ producto: productoActualizado });
    } catch (error) {
        console.log(error);
        respuesta.status(500).json({ message: 'Error al modificar el estado del producto' });
    }
}
