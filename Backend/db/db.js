import { createPool } from "mysql2/promise";
import { createPool } from "mysql2/promise";

export const pool = createPool({
    host:"localhost",
    user:"root",
    password:"Password",
    port:3306,
    database: "timeTrack",
})
