import express from "express";
import { pool } from "../db/db.js";

console.log("hello console")

const app = express()
const port = 3000

app.listen(port)

app.get("/ping", async (req, res) => { 
    const [result] = await pool.query ("SELECT 1 + 1");
    res.json(result[0])
})


////Verificar la coneccion a la base de datos
// pool.query('SELECT 1 + 1 AS result', (error, results) => {
//     if (error) {
//         console.error("Error al conectar a la base de datos:", error);
//         return;
//     }
//     console.log("Conexión exitosa, resultado de la consulta:", results);
// });



app.get("/activity", (req,res) => res.send ("obteniendo actividades"))
app.post("/activity", (req,res) => res.send ("creando actividades"))
app.put("/activity", (req,res) => res.send ("actualizando actividades"))
app.delete("/activity", (req,res) => res.send ("obteniendo actividades"))

