const db = require("../config/mysql");

export const index = (req, res) => {
  let sql = "SELECT id, title, description, isDone FROM tasks";
  if (req.query.status) {
    switch (req.query.status) {
      case "todo":
        sql = sql + " WHERE isDone = 0";
        break;

      case "done":
        sql = sql + " WHERE isDone = 1";
        break;

      default:
        break;
    }
  }

  db.connection.query(sql, (err, rows, fields) => {
    if (err) console.log(err);
    res.json(rows);
  });
};

export const show = (req, res) => {
  tasks = {
    name: "task " + req.params.id,
    description: "description task"
  };
  res.json({ tasks: tasks });
};

export const store = (req, res) => {
  const { title, description, isDone = false } = req.body;
  if (title && description) {
    db.connection.query(
      `INSERT INTO tasks ( title, description, isDone ) 
      VALUES ('${title}', '${description}', ${isDone})`,
      (err, row) => {
        if (err) {
          res
            .status(500)
            .json({ message: "Error al insertar los datos: " + err });
          throw err;
        }
        console.log(row);
        res.json({ message: `tarea creada con id  ${row.insertId}` });
      }
    );
  }
};
