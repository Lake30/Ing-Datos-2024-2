import { salidasModel } from "../model/salidasModel.js";

export const insertarSalida = async (peticion, respuesta) => {
    try{
        let data = peticion.body
        await salidasModel.create(data)
        let salidas = await salidasModel.find()
        respuesta.status(200).json({salidasModel: salidas})
    }catch(error){
        console.log(error);
    }
}