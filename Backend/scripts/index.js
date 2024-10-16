import express from "express";
import indexRoutes from "../routes/index.routes.js";
import activityRoutes from "../routes/activitys.routes.js";
import passesRoutes from "../routes/port.routes.js";
import cors from "cors";

const app = express();
const port = 3000;
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.json());
app.use(cors());
app.listen(port);

app.use(indexRoutes);

app.use("/api" ,activityRoutes);
app.use("/api" ,passesRoutes);



app.use((req, res, next) => {
    res.status(404).json({
        message: "Escribe bien mono estupido"
    })
})


console.log("hello console");
console.log("hello console");

////Verificar la coneccion a la base de datos
// pool.query('SELECT 1 + 1 AS result', (error, results) => {
//     if (error) {
//         console.error("Error al conectar a la base de datos:", error);
//         return;
//     }
//     console.log("Conexión exitosa, resultado de la consulta:", results);
// });
