import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import { getTodos, saveTask,updateStatus,updateTask } from './services/todos'
import ListsContainer from './components/ListContainer';
import CustomModal from './components/common/CustomModal'
import useModalWithData from './hooks/useModalWithData'

const App = () => {

  const initialFormState = {
    titulo: "",
    descripcion: ""
  }
  const [tasks, setTasks] = useState([])
  const [update, setUpdate] = useState(false)
  const [form, setForm] = useState(initialFormState)
  const [setIsModalOpened, isModalOpened, modalData, setModalData] = useModalWithData()

  const handleClickAddTask = () => {
    setForm(initialFormState)
    setModalData(initialFormState)
    setIsModalOpened(true)
  }
  const handleChange = e => {
    const value = e.target.value
    const name = e.target.name

    setForm({ ...form, [name]: value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    const { titulo, descripcion,id } = form
    const task = {
      titulo,
      descripcion,
      id
    }
    
    
    if (form.id) {
      
      updateTask(task)
      setIsModalOpened(false)
    }
    else{
       saveTask(task)
        setIsModalOpened(false)
    }
      getTodos().then(data => setTasks(data))
  }
  useEffect(() => {
    getTodos().then(data => setTasks(data))
  }, [])

  const changeTaskStatus = async (task) => {

    try{  
    let result = await  updateStatus(task)
    setUpdate(!update)  
    }
    catch(e){
      throw e 
    }
  }
  const editTask = (task) => {
    setForm(task)
    setModalData(form)
    setIsModalOpened(true)
  }
  return (
    <div className="container">

      <CustomModal
        isActive={isModalOpened}
        title={form.id ?? form.id > 0 ? "Editar tarea" : "Nuevo tarea"}
        handleClose={() => setIsModalOpened(false)}
      >
        <Form
          onSubmit={handleSubmit}
          onChange={handleChange}
          form={form}
        />
      </CustomModal>

      <div className="row mt-3">
        <div className="col">
          <h2>Tareas</h2>
        </div>
        <div className="col">
          <button className="btn btn-primary float-right" onClick={handleClickAddTask}>Nueva</button>
        </div>
      </div>

      <div className="row mt-3">

        <ListsContainer
          tasks={tasks}
          editTask={editTask}
          changeTaskStatus={changeTaskStatus}
        />

      </div>
    </div>
  );
}

export default App;
