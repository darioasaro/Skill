import mysql from "mysql";

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "3306",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "test"
});

connection.on("error", function(err) {
  console.log(err.code);
});

export default connection;
