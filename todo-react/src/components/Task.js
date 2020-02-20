import React from "react"

class Task extends React.Component {
  render() {
    const { name, description } = this.props.task
    return (
      <>
        <div className="card mb-3">
          <div className="card-header">
            {name}
          </div>
          <div className="card-body">
            {/* <h5 className="card-title">{name}</h5> */}
            <p className="card-text">{description}</p>
            <div className="row mx-auto">
              <div className="col-sm">
                <button className="btn btn-outline-success" onClick={() => this.props.onChangeState()} >Completada</button>
              </div>
              <div className="col-sm">
                <button className="btn btn-outline-primary" onClick={() => this.props.onEditTask()} >Editar</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Task