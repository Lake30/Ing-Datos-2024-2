import { Router } from "express";
import { consultarCorreoporID, consultarProveedores, consultarTelefonoporID, insertarProveedor, consultarProveedoresActivos, consultarporPaisOrigen, consultarContactoporID, consultarIDporNombre, consultarContactoporNombre } from "../controller/proveedorController.js"



const router = Router()
router.post('/proveedorins', insertarProveedor);
router.get('/proveedorcons', consultarProveedores);
router.get('/proveedorconsporPaisOrigen', consultarporPaisOrigen );
router.get('/proveedorconsTelefonoporID', consultarTelefonoporID)
router.get('/proveedorconsCorreoporID', consultarCorreoporID )
router.get('/proveedorconsContactoPorID', consultarContactoporID );
router.get('/proveedorconsIDporNombre', consultarIDporNombre)
router.get('/proveedorconsContactoPorNombre', consultarContactoporNombre)
router.get('/proveedorconsProveedoresActivos', consultarProveedoresActivos)


export default router;