import { Router } from "express";
import { insertarSalida } from "../controller/salidasController.js"
const router = Router()
router.post('/salidains', insertarSalida);
export default router;