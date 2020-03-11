import React, { useState, useEffect } from "react";
import { getUsersDb,addUserTask, getTaskPartner } from "../services/todos.js";

const Task = ({ task, onChangeState, onEditTask, onDeleteTask, userLog }) => {
  // const initialListState = [{
  //   name: ""

  // } ]
  const [user, setUser] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const preUser = async () => {
      let usuarios = await getUsersDb();
      let arrUsers = await usuarios.data;
      let avaiableUsers = [];
      
      if (arrUsers.length > 0) {
        
        avaiableUsers=arrUsers.filter(user =>user.name != userLog.name) 
      }
      console.log('avaiableUsers:',avaiableUsers)
      return avaiableUsers
    } 
     preUser().then(data=>setUserList(data))
  }, []);

  const addUser = async () => {
     let userAdd = userList.filter(usuario=>usuario.name===user)
    let response = await addUserTask(userAdd,task)
    if(response.ok){
      alert("Colaborador agregado")
    }
    else{
      alert("Error,verifique que no sea un colaborador ya asignado")
    }
  };

  const taskPartner =()=>{
    let arrPart = getTaskPartner(task.id)
  }

  const handleChangeUser = e => {
    setUser(e.target.value);
  };
  return (
    <>
      <div className="card mb-3">
        <div className="card-header">{task.titulo}</div>
        <div>Colaboradores
          <div>{taskPartner()}</div>
        </div>
        <div className="card-body">
          <p className="card-text">{task.descripcion}</p>
          <div className="row">
            <label>Add Partner:</label>
            <select onChange={handleChangeUser} name="users">
             <option value="selected">Select User</option>
              {userList.map(user=>{
              return <option>{user.name}</option>
          })}
            
            </select>
            <button className="btn btn-outline-success" onClick={addUser}>
              ADD
            </button>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6">
              <button
                className="btn btn-outline-success"
                onClick={() => onChangeState()}
              >
                {task.isDone ? "Reiniciar" : "Finalizar"}
              </button>
            </div>
            <div className="col-12 col-sm-6">
              <button
                className="btn btn-outline-primary float-right"
                onClick={() => onEditTask()}
              >
                Editar
              </button>
              <button
                className="btn btn-outline-primary float-right"
                onClick={() => onDeleteTask()}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
