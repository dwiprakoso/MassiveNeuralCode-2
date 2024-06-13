import connection from "../config/database.js";

export const getAllUsers = (callback) => {
  connection.query("SELECT * FROM users", (error, results) => {
    if (error) {
      return callback(error, null);
    }
    callback(null, results);
  });
};
export const storeUsers = (user, callback) => {
  const param = req.body;
  const name = param.name;
  const jurusan = param.jurusan;
  const queryStr = 'INSERT INTO mahasiswa (name, jurusan) VALUES (?, ?)';
  const values = [name, jurusan];

  connection.query(queryStr, values, (error, results) => {
    if (error) {
      return callback(error, null);
    }
    callback(null, results);
  });
};