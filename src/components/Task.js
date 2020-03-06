import React from "react"

const Task = ( { task, onChangeState, onEditTask,onDeleteTask } ) => {
  return (
    <>
      <div className="card mb-3">
        <div className="card-header">
          {task.titulo}
        </div>
        <div className="card-body">
          <p className="card-text">{task.descripcion}</p>
          <div className="row">
            <div className="col-12 col-sm-6">
              <button className="btn btn-outline-success"
                onClick={() => onChangeState()} >
                { task.isDone ? "Reiniciar" : "Finalizar"} 
              </button>
            </div>
            <div className="col-12 col-sm-6">
              <button className="btn btn-outline-primary float-right" onClick={() => onEditTask()} >Editar</button>
              <button className="btn btn-outline-primary float-right" onClick={() => onDeleteTask()} >Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Task