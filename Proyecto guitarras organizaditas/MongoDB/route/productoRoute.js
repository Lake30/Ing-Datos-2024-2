import { Router } from "express";
import { insertarProducto } from "../controller/productoController.js"
const router = Router()
router.post('/productoins', insertarProducto);
export default router;