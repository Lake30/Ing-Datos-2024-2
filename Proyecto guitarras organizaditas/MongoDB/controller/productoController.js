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