import { pool } from "../db/db.js";




export const getActivity = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM actividades")
  res.json(rows)
}

export const getActivityId = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM actividades WHERE id_actividad = ?", [req.params.id])

  if (rows.length <= 0) return res.status(404).json({
    message: "Activity not found"
  })
  res.json(rows[0])
}

export const createActivity = async (req, res) => {
  const { id_usuario, id_deporte, id_puerto, fecha, tiempo, velocidad, distancia, nombre_actividad, } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO actividades ( id_usuario, id_deporte, id_puerto,fecha,tiempo,velocidad,distancia,nombre_actividad) VALUES (?, ?, ?, ?, ?, ?, ?, ? )", [id_usuario, id_deporte, id_puerto, fecha, tiempo, velocidad, distancia, nombre_actividad]
  );

  res.send({
    id: rows.insertId,
  });
};

export const updateActivity = async (req, res) => {
  const { id } = req.params
  const { id_deporte, id_puerto, fecha, tiempo, velocidad, distancia, nombre_actividad } = req.body
  const [result] = await pool.query(
    "UPDATE actividades SET id_deporte = ?, id_puerto = ?, fecha = ?, tiempo = ?, velocidad = ?, distancia = ?, nombre_actividad = ? WHERE id_actividad = ?",
    [id_deporte, id_puerto, fecha, tiempo, velocidad, distancia, nombre_actividad, id]
  );

  if (result.affectedRows === 0) return res.status(404).json({
    message: "Activity not found"
  })

  res.send("recived");
}

export const deleteActivity = async (req, res) => {
  const [result] = await pool.query("DELETE FROM actividades WHERE id_actividad = ?", [req.params.id])

  res.send("Actividad eliminada")

  if (rows.length <= 0) return res.status(404).json({
    message: "Activity not found"
  })
  res.json(rows[0])
} 
