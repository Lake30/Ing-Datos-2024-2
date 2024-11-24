import { entradasModel } from "../model/entradasModel.js";

export const insertarEntrada = async (peticion, respuesta) => {
    try{
        let data = peticion.body
        await entradasModel.create(data)
        let entradas = await entradasModel.rener()
        respuesta.status(200).json({entradasModel: entradas})
    }catch(error){
        console.log(error);
    }
}