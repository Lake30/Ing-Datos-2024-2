import { Router } from "express";
import { insertarEntrada } from "../controller/entradasController.js"
const router = Router()
router.post('/entradains', insertarEntrada);
export default router;