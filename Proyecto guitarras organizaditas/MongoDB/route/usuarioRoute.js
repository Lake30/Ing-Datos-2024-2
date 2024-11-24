import { Router } from "express";
import { insertarUsuario, consultarUsuariosActivos, consultarIDporCargo, consultarIDporCedula, consultarTelefonoporID, consultarCorreoporID, consultarIDporNombre, consultarNacimientoporNombre, consultarUsuarios } from "../controller/usuarioController.js"

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

export default router;
