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

export const consultarFechaSalidaporID = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { _id } = peticion.body; 
    try {
        const FechaSalida = await salidasModel.find({ _id }).select('fechaSalida -_id');  
        respuesta.status(200).json({ FechaSalida });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar los FechaSalida por id' });
    }
};