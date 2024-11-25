import { config } from "dotenv"
import express, {json} from "express"
import { connectDatabase } from "./config/database.js"
import usuarioRoute from "../MongoDB/route/usuarioRoute.js"
import productoRoute from "../MongoDB/route/productoRoute.js"
import proveedorRoute from "../MongoDB/route/proveedorRoute.js"
import entradasRoute from "../MongoDB/route/entradasRoute.js"
import salidasRoute from "../MongoDB/route/salidasRoute.js"

config()
// Conexión Base de Datos
connectDatabase()
    .then(() => {
        console.log("Conexión Base de Datos Exitosa")
    })
    .catch((error) => {
        console.error("Error al conectar a la Base de Datos:", error)
        process.exit(1)
    });
// Configuración del servidor
const server = express()
const PORT = process.env.PORT
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));
// Configuración Rutas
server.use(usuarioRoute)
server.use(productoRoute)
server.use(proveedorRoute)
server.use(entradasRoute)
server.use(salidasRoute)
server.listen(PORT, () => console.log(`Server running in port ${PORT}`))