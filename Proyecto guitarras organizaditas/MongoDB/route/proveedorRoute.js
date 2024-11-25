import { Router } from "express";
import { insertarProveedor, consultarProveedores, consultarporPaisOrigen, consultarTelefonoporID, consultarCorreoporID, consultarContactoporID, consultarIDporNombre, consultarContactoporNombre, consultarProveedoresActivos, eliminarProveedor, modificarContactoPrincipal, modificarTelefonoProveedor, modificarEstadoProveedor, modificarCorreoProveedor, modificarNombreProveedor} from "../controller/proveedorController.js"
const router = Router()
router.post('/proveedorins', insertarProveedor);
router.get('/proveedorcons', consultarProveedores);
router.get('/proveedorconsporPaisOrigen', consultarporPaisOrigen );
router.get('/proveedorconsTelefonoporID', consultarTelefonoporID);
router.get('/proveedorconsCorreoporID', consultarCorreoporID );
router.get('/proveedorconsContactoPorID', consultarContactoporID );
router.get('/proveedorconsIDporNombre', consultarIDporNombre);
router.get('/proveedorconsContactoPorNombre', consultarContactoporNombre);
router.get('/proveedorconsProveedoresActivos', consultarProveedoresActivos);
router.delete('/proveedorElim', eliminarProveedor);
router.put('/proveedorModConta', modificarContactoPrincipal);
router.put('/proveedorModTele', modificarTelefonoProveedor);
router.put('/proveedorModEst', modificarEstadoProveedor);
router.put('/proveedorModConta', modificarCorreoProveedor);
router.put('/proveedorModNom', modificarNombreProveedor)
export default router;