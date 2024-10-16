import { pool } from "../db/db.js";




export const getActivity = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM activities")
  res.json(rows)
}

export const getActivityId = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM activities WHERE activity_id = ?", [req.params.id])

  if (rows.length <= 0) return res.status(404).json({
    message: "Activity not found"
  })
  res.json(rows[0])
}

export const createActivity = async (req, res) => {
  const { userId, sportId, portId, activityDate, activityTime, averageSpeed, activityName } = req.body;
  console.log(req.body)
  const [rows] = await pool.query(
    "INSERT INTO activities (user_id, sport_id, port_id, activity_date, activity_time, average_speed, activity_name) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [userId, sportId, portId, activityDate, activityTime, averageSpeed, activityName]
  );

  res.send({
    id: rows.insertId,
  });
};

export const updateActivity = async (req, res) => {
  const { id } = req.params
  const { id_deporte, id_puerto, fecha, tiempo, velocidad, distancia, nombre_actividad } = req.body
  const [result] = await pool.query(
    "UPDATE activities SET activity_id = ?, id_puerto = ?, fecha = ?, tiempo = ?, velocidad = ?, distancia = ?, nombre_actividad = ? WHERE id_actividad = ?",
    [id_deporte, id_puerto, fecha, tiempo, velocidad, distancia, nombre_actividad, id]
  );

  if (result.affectedRows === 0) return res.status(404).json({
    message: "Activity not found"
  })

  res.send("recived");
}

export const deleteActivity = async (req, res) => {
  const [result] = await pool.query("DELETE FROM activities WHERE activity_id = ?", [req.params.id])
  if (result.affectedRows === 0) return res.status(404).json({
    message: "Activity not found"
  })
  res.send("Actividad eliminada")
} 
