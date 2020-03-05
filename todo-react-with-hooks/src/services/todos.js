export const getTodos = async () => {
  let response = await fetch("http://localhost:3000/api/tasks/");
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
    body: JSON.stringify({ titulo: task.titulo, descripcion: task.descripcion })
  });
  let result = await response.json();
  console.log("resultado", result);

  return result;
};
