import { Router } from "express";
import { insertarProducto, consultarProductosregistrados, consultarGuitarrasZurdas, consultarProductosDisponibles, consultarPrecioporID, consultarCantidadporID, consultarIDporReferencia, consultarProductosconAccesorio } from "../controller/productoController.js"
const router = Router()

router.post('/productoins', insertarProducto);
router.get('/productocons', consultarProductosregistrados);
router.get('/productoconsZurdas', consultarGuitarrasZurdas);
router.get('/productoconsDisponible', consultarProductosDisponibles);
router.get('/productoconsPrecioporID', consultarPrecioporID);
router.get('/productoconsCantidadporID', consultarCantidadporID);
router.get('/productoconsIDporReferencia', consultarIDporReferencia);
router.get('/productoconsProductosconAccesorio', consultarProductosconAccesorio);



export default router;