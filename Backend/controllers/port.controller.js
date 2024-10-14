// import { pool } from "../db/db.js";


// export const getPort = async (req, res) => {
//     try {
//         const [rows] = await pool.query("SELECT * FROM puertos_montana")
//         res.json(rows)
//     } catch (error) {
//         return res.status(500).json({
//             message: "something went wrong"
//         })
//     }
// }

// export const getPortId = async (req, res) => {
//     try {
//         const [rows] = await pool.query("SELECT * FROM puertos_montana WHERE id_puerto = ?", [req.params.id])
//         if (rows.length <= 0) return res.status(404).json({
//             message: "Port not found"
//         })
//         res.json(rows[0])
//     } catch (error) {
//         return res.status(500).json({
//             message: "something went wrong"
//         })
//     }
// }

// export const createPort = async (req, res) => {
//     try {
//         const { portName, sport, altitude, distance, maximumInclination, averageInclination, ubication } = req.body;
//         console.log(req.body)
//         const [rows] = await pool.query(
//             "INSERT INTO puertos_montana ( nombre, altitud, distancia, inclinacion_maxima, inclinacion_promedio, ubicacion,  id_deporte ) VALUES (?, ?, ?, ?,  ?, ?, ?)", [portName, altitude, distance, maximumInclination, averageInclination, ubication, sport]
//         );
//         res.send({
//             id: rows.insertId,
//         });
//     } catch (error) {
//         return res.status(500).json({
//             message: "something went wrong"
//         })
//     }
// };

// export const updatePort = async (req, res) => {

//     try {
//         const { id } = req.params
//         const { portName, sport, altitude, distance, maximumInclination, averageInclination, ubicacion } = req.body
//         const [result] = await pool.query(
//             "UPDATE puertos_montana SET nombre = ?, altitud = ?, distancia = ?, inclinacion_maxima = ?, inclinacion_promedio = ?, ubicacion = ?, id_deporte = ? WHERE id_puerto = ? ", [portName, altitude, distance, maximumInclination, averageInclination, ubicacion, sport, id]);

//         if (result.affectedRows === 0) return res.status(404).json({
//             message: "Activity not found"
//         })

//         res.send("recived");

//     } catch (error) {
//         return res.status(500).json({
//             message: "something went wrong"
//         })
//     }
// }

// // export const updatePort = async (req, res) => {
// //     try {
// //         const { id } = req.params; // Obtener el ID del puerto desde los parámetros de la solicitud
// //         const { nombre, altitud, distancia, inclinacion_maxima, inclinacion_promedio, ubicacion, id_deporte } = req.body; // Asegúrate de que los nombres sean correctos

// //         const [result] = await pool.query(
// //             "UPDATE puertos_montana SET nombre = ?, altitud = ?, distancia = ?, inclinacion_maxima = ?, inclinacion_promedio = ?, ubicacion = ?, id_deporte = ? WHERE id_puerto = ?", 
// //             [nombre, altitud, distancia, inclinacion_maxima, inclinacion_promedio, ubicacion, id_deporte, id]
// //         );

// //         if (result.affectedRows === 0) return res.status(404).json({
// //             message: "Port not found" // Cambiar el mensaje a "Port not found"
// //         });

// //         res.send("Received"); // Responder con "Received"

// //     } catch (error) {
// //         return res.status(500).json({
// //             message: "Something went wrong"
// //         });
// //     }
// // };

// export const deletePort = async (req, res) => {
//     try {
//         const [result] = await pool.query("DELETE FROM actividades WHERE id_actividad = ?", [req.params.id]);
//         if (result.affectedRows === 0) {
//             return res.status(404).json({
//                 message: "Activity not found"
//             });
//         }
//         res.send("Actividad eliminada");
//     } catch (error) {
//         return res.status(500).json({
//             message: "Something went wrong"
//         });
//     }
// }