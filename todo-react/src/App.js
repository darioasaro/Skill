import React from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { getTodos } from './services/todos'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: [],
      form: {
        name: "",
        description: ""
      },
      editedTask: {}
    }
  }
  handleChange = e => {
    const value = e.target.value
    const name = e.target.name

    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    const { tasks, form } = this.state
    const { name, description } = form
    if ( form.id ) {
      const newTasks = tasks.map( task => task.id === form.id ? form : task )
      this.setState({
        tasks: newTasks,
        form: {
          name: "",
          description: ""
        }
      })
    }
    else if ( name && description ) {
      const task = {
        name,
        description
      }      
      task.id = tasks[ tasks.length -1 ].id + 1
      this.setState({
        tasks: [ ...tasks, task ],
        form: {
          name: "",
          description: ""
        }
      })
    }
  }
  componentDidMount() {
    getTodos().then( data =>  {
      this.setState({
        tasks: data
      })
    })
  }
  changeTaskStatus = ( task ) => {
    const taskUpdated = this.state.tasks.map(taskEl => {
      if (taskEl.id === task.id)
        taskEl.done = !taskEl.done
      return taskEl
    })
    this.setState({
      tasks: taskUpdated
    })
  }
  editTask = ( task ) => {
    this.setState( {
      editedTask: task,
      form: task
    })
  }
  pendingTasks = () => {
    return this.state.tasks.filter( ( task ) => !task.done )
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col mb-3">
            <Form
              onSubmit={ this.handleSubmit }
              onChange={ this.handleChange }
              form={ this.state.form }
            />
          </div>
          <div className="col">
            { this.pendingTasks().length > 0 ? 
              <List tasksList={ this.pendingTasks() }
                onChangeTaskStatus={ this.changeTaskStatus }
                onEditTask={ this.editTask } />
            : <h3> Muy bien!! No tienes tareas pendientes </h3> }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
