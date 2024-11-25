import { Router } from "express";
import { insertarProducto, eliminarProducto, consultarProductosregistrados, consultarGuitarrasZurdas, consultarProductosDisponibles, consultarPrecioporID, consultarCantidadporID, consultarIDporReferencia, consultarProductosconAccesorio, modificarReferenciaProducto, modificarPrecioProducto, modificarEstadoProducto } from "../controller/productoController.js"
const router = Router()
router.post('/productoins', insertarProducto);
router.delete('/productoElim', eliminarProducto)
router.get('/productocons', consultarProductosregistrados);
router.get('/productoconsZurdas', consultarGuitarrasZurdas);
router.get('/productoconsDisponible', consultarProductosDisponibles);
router.get('/productoconsPrecioporID', consultarPrecioporID);
router.get('/productoconsCantidadporID', consultarCantidadporID);
router.get('/productoconsIDporReferencia', consultarIDporReferencia);
router.get('/productoconsProductosconAccesorio', consultarProductosconAccesorio);
router.put('/productoModReferencia', modificarReferenciaProducto);
router.put('/productoModPrecio', modificarPrecioProducto);
router.put('/productoModEstado', modificarEstadoProducto);
export default router;