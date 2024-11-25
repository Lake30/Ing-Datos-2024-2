import { Router } from "express";
import { insertarUsuario, consultarUsuarios, consultarUsuariosActivos, consultarIDporCargo, consultarIDporCedula, consultarTelefonoporID, consultarCorreoporID, consultarIDporNombre, consultarNacimientoporNombre, eliminarUsuario, modificarCargoUsuario, modificarTelefonoUsuario, modificarCorreoUsuario, modificarEstadoUsuario, modificarContrasenaUsuario} from "../controller/usuarioController.js"
const router = Router()
router.post('/usuarioins', insertarUsuario);
router.get('/usuariocons', consultarUsuarios);
router.get('/usuarioconsactivos', consultarUsuariosActivos);
router.get('/usuarioIDporCargo', consultarIDporCargo);
router.get('/usuarioIDporCedula', consultarIDporCedula);
router.get('/usuarioTelefonoporID', consultarTelefonoporID);
router.get('/usuarioCorreoporID', consultarCorreoporID);
router.get('/usuarioIDporNombre', consultarIDporNombre);
router.get('/usuarioNacimientoporNombre', consultarNacimientoporNombre);
router.delete('/usuarioElim', eliminarUsuario);
router.put('/usuarioModCargo', modificarCargoUsuario);
router.put('/usuarioModTel', modificarTelefonoUsuario);
router.put('/usuarioModCorreo', modificarCorreoUsuario);
router.put('/usuarioModEstado', modificarEstadoUsuario);
router.put('/usuarioModContra', modificarContrasenaUsuario)
export default router;
