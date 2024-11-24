import { Router } from "express";
import { consultarFechaSalidaporID, insertarSalida } from "../controller/salidasController.js"
const router = Router()

router.post('/salidains', insertarSalida);
router.get('/salidaconsFechaSalidaporID', consultarFechaSalidaporID);



export default router;