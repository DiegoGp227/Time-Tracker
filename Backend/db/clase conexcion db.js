import mysql from 'mysql2';
// const {mysql} = pkg;

export default class Connection { 


  constructor() {

    if (Connection.instance) {
      return Connection.instance;
    }

    /**
     * Protocolo de conexión
     */
    this.pool = mysql.createPool({
      host: "localhost",
      user: "root",
      database: "timeTrack",
      password: "Password",
      waitForConnections: true,
      connectionLimit: 100,
      maxIdle: 2, // max idle connections, the default value is the same as `connectionLimit`
      idleTimeout: 1000, // idle connections timeout, in milliseconds, the default value 60000
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0
    });

    Connection.instance = this;
  }

  /**
   * Consulta, insert, update simples
   */
  async ejecutarSQL(query) {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          return reject(err); // Rechaza si hay un error al obtener la conexión
        }

        connection.query(query, (err, rows) => {
          // Libera la conexión después de que se resuelve la consulta
          connection.release();

          if (err) {
            return reject(err); // Rechaza si hay un error en la consulta
          }

          resolve(rows); // Resuelve la promesa con los resultados
        });
      });
    });
  }

  // Insert value array

  async ejecutarArraySQL(query, data) {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
          return;
        }
        connection.query(query, data, (err, rows) => {
          connection.release(); // Liberar la conexión al pool

          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    });
  }
}

// module.exports = Connection

