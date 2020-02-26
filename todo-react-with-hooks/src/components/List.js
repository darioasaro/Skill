import React from "react";
import Task from "./Task";

const List = ( { onChangeTaskStatus, onEditTask, tasksList } ) => {
  const pendingTasks = () => tasksList.filter(task => !task.done)
  return (
    <>
      {pendingTasks().map((task, key) => 
        (<Task
          task={task}
          onChangeState={ () => onChangeTaskStatus( task ) }
          onEditTask={ () => onEditTask( task ) }
          key={key} 
        />)
      )}
    </>
  )
}

export default List