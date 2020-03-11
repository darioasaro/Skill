import React, { useState, useEffect } from 'react';
import Login from './components/common/Login/Login.js'
import './App.css';
import Form from './components/Form';
import { getTodos, saveTask,updateStatus,updateTask,deleteTaskDb, loginUserDb,registerUserDb } from './services/todos'
import ListsContainer from './components/ListContainer';
import CustomModal from './components/common/CustomModal'
import useModalWithData from './hooks/useModalWithData'

const App = () => {

  const initialFormState = {
    titulo: "",
    descripcion: ""
  }
  const initialUserState = {
    name: "",
    pass: ""
  }
  const [tasks, setTasks] = useState([])
  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState(initialUserState)
  //const [token, setToken] = useState(null)
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
      id,
      user:user.name
    }
    
    
    if (form.id) {
      
      updateTask(task)
      setIsModalOpened(false)
    }
    else{
       saveTask(task)
        setIsModalOpened(false)
    }
    setUpdate(!update) 
    getTodos(user).then(data => setTasks(data))
  }

  // useEffect(() => {
  //   getTodos().then(data => setTasks(data))
    
  // },[])

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
  const deleteTask=(task)=>{
   let result = deleteTaskDb(task)
   setUpdate(!update) 
   getTodos(user).then(data => setTasks(data))
  }
  const loginUser = async (e)=>{
     e.preventDefault()

      let response = await loginUserDb(user)
      if(response.result==true){
        //console.log('response',response);
        alert('Bienvenido')
        setLogged(true)
        getTodos(user).then(data => setTasks(data))
        

      }
      else{
        alert('Intente nuevamente')
         }
         //console.log('response',response.result)
    
      

  }
  const handleChangeLog = e => {
    const value = e.target.value
    const name = e.target.name

    setUser({ ...user, [name]: value })
  }
  const createAccount = async (user)=>{

   let result = await registerUserDb(user)
   if(result){
     alert("usuario creado con exito");
     let nuevo = {
       name:user.newEmail,
       pass:user.newPass
     }
     
     setUser(nuevo)
     setLogged(true)
     getTodos(user).then(data => setTasks(data))

   }
   else{
     alert("Error al crear el usuario, intente nuevamente")
   }

  }
  return (
    logged ? 
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
          deleteTask={deleteTask}
          changeTaskStatus={changeTaskStatus}
          user = {user}
        />
      </div>
    </div>
    
    : <Login login = {loginUser} createAccount={createAccount}onChange={handleChangeLog} />
  
    );
}

export default App;
