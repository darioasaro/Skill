const db = require('../config/mysql')

exports.index = ( req, res ) => {
  db.connection.query(
    'SELECT title, description, isDone FROM tasks;',
    (err, rows, fields) => {
      if ( err ) console.log(err)
      console.log(rows);
      console.log(fields);
      res.json(rows);
    });

  // tasks = [{
  //   name: "task 1",
  //   description: "description task"
  // },
  // {
  //   name: "task 2",
  //   description: "description task"
  // }]

  // res.json( {'tasks': tasks} )
}


exports.show = ( req, res ) => {
  tasks = {
    name: "task " + req.params.id ,
    description: "description task"
  }
  res.json( {'tasks': tasks} )
}


exports.store = ( req, res ) => {
  tasks = {
    name: "task ",
    description: "description task"
  }
  res.json( {'tasks': tasks} )
}

