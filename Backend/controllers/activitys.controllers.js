import { pool } from "../db/db.js";




export const getActivity = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM actividades;")
  res.json(rows)
};

export const createActivity = async (req, res) => {
  const {
    id_usuario,
    id_deporte,
    id_puerto,
    fecha,
    tiempo,
    velocidad,
    distancia,
    nombre_actividad,
  } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO actividades ( id_usuario, id_deporte, id_puerto,fecha,tiempo,velocidad,distancia,nombre_actividad) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      id_usuario,
      id_deporte,
      id_puerto,
      fecha,
      tiempo,
      velocidad,
      distancia,
      nombre_actividad,
    ]
  );

  console.log(req.body);
  res.send({
    id: rows.insertId,
    id_usuario,
    id_deporte,
    id_puerto,
    fecha,
    tiempo,
    velocidad,
    distancia,
    nombre_actividad,
  });
};

export const updateActivity = (req, res) =>
  res.send("actualizando actividades");

export const deleteActivity = (req, res) => res.send("obteniendo actividades");
