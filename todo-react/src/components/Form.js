import React from "react";

class Form extends React.Component {
  constructor( props ) {
    super( props )
  }

  render() {
    const { onSubmit, onChange, form } = this.props
    return (
      <div className="card">
        <div className="card-header">
          Nueva tarea
        </div>
        <div className="card-body">
          <form onSubmit={ onSubmit } >
            <div className="form-group">
              <label htmlFor="exampleInputTitle">Título</label>
              <input type="text" className="form-control" name="name" value={ form.name } onChange={ onChange }></input>
            </div>
            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <input type="text" className="form-control" name="description" value={ form.description } onChange={ onChange }></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Form