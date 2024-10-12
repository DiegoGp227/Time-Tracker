// import { pool,  } from "../db/db.js";
// const objectConn = new classConection();
// const classConection = require('../db/db');
 
import classConection from '../db/db.js';

const objectConn = new classConection();

export const getActivity = (req, res) => res.send("obteniendo actividades")


export const createActivity = async (req, res) => {
  console.log(req.body);

  const { userId, sport, port, date, time, velocity, distance, nameActivity } = req.body;
  
  // Asegúrate de que todas las columnas necesarias están incluidas en la consulta
  let queryTime = `INSERT INTO actividades (id_usuario, id_deporte, id_puerto, fecha, tiempo, velocidad, distancia, nombre_actividad) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  let response = await objectConn.ejecutarArraySQL(queryTime, [userId,sport, port, date, time, velocity, distance, nameActivity]);

  res.status(201).json({ message: 'Actividad creada con éxito' });

  if (response.affectedRows > 0) {
    //se crea la notificacion
    let idc = response.insertId;
    return response;

  }
};


export const updateActivity = (req, res) => res.send("actualizando actividades")
export const deleteActivity = (req, res) => res.send("obteniendo actividades")