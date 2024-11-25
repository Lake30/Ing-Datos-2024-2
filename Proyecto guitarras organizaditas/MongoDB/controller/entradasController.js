import { entradasModel } from "../model/entradasModel.js";

export const insertarEntrada = async (peticion, respuesta) => {
    try{
        let data = peticion.body
        await entradasModel.create(data)
        let entradas = await entradasModel.find()
        respuesta.status(200).json({entradasModel: entradas})
    }catch(error){
        console.log(error);
    }
}
export const consultarFechaEntradaporID = async (peticion, respuesta) => {
    console.log("Ruta consultada");
    const { _id } = peticion.body; 
    try {
        const fechaEntrada = await entradasModel.find({ _id }).select('fechaEntrada -_id');  
        respuesta.status(200).json({ fechaEntrada });
    } catch (error) {
        console.error(error);
        respuesta.status(500).json({ message: 'Error al consultar los Fecha Entrada por id' });
    }
};