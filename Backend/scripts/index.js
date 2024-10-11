import express from "express";
import activityRoutes from "../routes/activitys.routes.js";
import indexRoutes from "../routes/index.routes.js";
import cors from "cors";

const app = express()
const port = 3000

app.use(express.json())
app.use(cors());
app.listen(port)
app.use(indexRoutes)
app.use(activityRoutes)

console.log("hello console")

////Verificar la coneccion a la base de datos

// pool.query('SELECT 1 + 1 AS result', (error, results) => {
//     if (error) {
//         console.error("Error al conectar a la base de datos:", error);
//         return;
//     }
//     console.log("Conexión exitosa, resultado de la consulta:", results);
// });

