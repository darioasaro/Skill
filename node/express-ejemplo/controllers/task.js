const db = require("../config/mysql");

exports.index = (req, res) => {
  db.connection.query(
    "SELECT id, title, description, isDone FROM tasks;",
    (err, rows, fields) => {
      if (err) console.log(err);
      res.json(rows);
    }
  );

  // tasks = [{
  //   name: "task 1",
  //   description: "description task"
  // },
  // {
  //   name: "task 2",
  //   description: "description task"
  // }]

  // res.json( {'tasks': tasks} )
};

exports.show = (req, res) => {
  tasks = {
    name: "task " + req.params.id,
    description: "description task"
  };
  res.json({ tasks: tasks });
};

exports.store = (req, res) => {
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
        res.json({ message: `tarea creada con id  ${row.insertId}`});
      }
    );
  }
};
