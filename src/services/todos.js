export const getTodos = async user => {
  let response = await fetch("http://localhost:3000/api/tasks/" + user.name);
  let task = await response.json();
  console.log(task);
  return task.tasks;
};

export const updateStatus = async task => {
  task.isDone = !task.isDone;

  let response = await fetch("http://localhost:3000/api/tasks/" + task.id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({ id: task.id, isDone: task.isDone })
  });

  let result = await response.json();
  return result;
};

export const saveTask = async task => {
  console.log("tarea a agregar: ", task);

  let response = await fetch("http://localhost:3000/api/tasks/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      titulo: task.titulo,
      descripcion: task.descripcion,
      user: task.user
    })
  });
  let result = await response.json();
  console.log("resultado", result);

  return result;
};

export const updateTask = async task => {
  let response = await fetch("http://localhost:3000/api/tasks/" + task.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ titulo: task.titulo, descripcion: task.descripcion })
  });
  let result = await response.json();
  console.log("resultado", result);

  return result;
};
export const deleteTaskDb = async task => {
  let response = await fetch("http://localhost:3000/api/tasks/" + task.id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
  let result = await response.json();
  console.log("resultado", result);

  return result;
};

export const loginUserDb = async user => {
  let response = await fetch("http://localhost:3000/api/user/" + user.name, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user: user.name, pass: user.pass })
  });
  let result = response.json();
  return result;
};

export const registerUserDb = async user => {
  console.log(user);

  let response = await fetch(
    "http://localhost:3000/api/user/register/" + user.newEmail,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: user.newEmail, pass: user.newPass })
    }
  );
  let result = response.json();
  return result;
};

export const getUsersDb = async () => {
  try {
    let response = await fetch("http://localhost:3000/api/user/");

    let result = response.json();

    return result;
  } catch (e) {
    throw e;
  }
};

export const addUserTask = async (user, task) => {
  try {
    let response = await fetch("http://localhost:3000/api/tasks/partner/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: user[0].id, task: task.id })
    });
    return response;
  } catch (e) {
    throw e;
  }
};

export const getTaskPartner = async(task)=>{
  let response = await fetch("http://localhost:3000/api/tasks/partner/"+task)
  let data = await response.json()
  console.log('datos',data)

}
