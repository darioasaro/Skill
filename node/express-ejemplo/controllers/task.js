
exports.index = ( req, res ) => {
  tasks = [{
    name: "task 1",
    description: "description task"
  },
  {
    name: "task 2",
    description: "description task"
  }]
  res.json( {'tasks': tasks} )
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

