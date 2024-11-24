import { Router } from "express";
import { insertarEntrada, consultarFechaEntradaporID } from "../controller/entradasController.js"
const router = Router()

router.post('/entradains', insertarEntrada);
router.get('/entradaconsEntradaporID', consultarFechaEntradaporID);

export default router;