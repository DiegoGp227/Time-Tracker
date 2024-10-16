import { pool } from "../db/db.js";

export const getPassesId = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM mountain_passes WHERE port_id = ?", [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: "Port not found"
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong"
        })
    }
}

export const getPasses = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM mountain_passes")
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong"
        })
    }
}

export const createPasses = async (req, res) => {
    try {
        const { portName, sport, altitude, distance, maximumInclination, averageInclination, ubication, photoUrl } = req.body;
        console.log(req.body)
        const [rows] = await pool.query(
            "INSERT INTO mountain_passes ( port_name, altitude, distance, max_inclination, avg_inclination, location, photo_url, sport_id ) VALUES (?, ?, ?, ?,  ?, ?, ?, ?)", [portName, altitude, distance, maximumInclination, averageInclination, ubication, photoUrl, sport ]
        );
        res.send({
            id: rows.insertId,
        });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong"
        })
    }
};

export const updatePasses = async (req, res) => {

    try {
        const { id } = req.params
        const { portName, sport, altitude, distance, maximumInclination, averageInclination, ubication, photoUrl } = req.body
        const [result] = await pool.query(
            "UPDATE mountain_passes SET port_name = ?, altitude = ?, distance = ?, max_inclination = ?, avg_inclination = ?, location = ?, photo_url = ?, id_deporte = ? WHERE port_id = ? ", [portName, altitude, distance, maximumInclination, averageInclination, ubication, photoUrl, sport]);

        if (result.affectedRows === 0) return res.status(404).json({
            message: "Activity not found"
        })

        res.send("recived");

    } catch (error) {
        return res.status(500).json({
            message: "something went wrong"
        })
    }
}

export const deletePasses = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM mountain_passes WHERE port_id = ?", [req.params.id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Activity not found"
            });
        }
        res.send("Actividad eliminada");
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
}