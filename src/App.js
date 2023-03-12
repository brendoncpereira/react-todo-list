import React, { useState } from "react";

const TodoList = () => {

  const [currentTask, setCurrentTask] = useState("")
  const [newTasks, setNewTasks] = useState ([])

  const handleChangeTask = (e) => {
    setCurrentTask(e.target.value)
  }

  const handleAddTask = () => {

    const trimmedTask = currentTask.trim()

    if(trimmedTask !== "") {
      setNewTasks([...newTasks, currentTask])
      setCurrentTask("")
    } else {
      alert("Por favor, escreva alguma tarefa.")
    }
  }

  const handleDeleteTask = (index) => {
    const updatedTasks = [...newTasks]

    updatedTasks?.splice(index, 1)

    setNewTasks(updatedTasks)
  }

  return (
    <div>
      <div>
        <input 
        placeholder="Adicione uma tarefa"
        onChange={handleChangeTask}
        value={currentTask}
        />
      </div>

      <div>
        <button onClick={handleAddTask}>Adicionar</button>
      </div>

      <div>
        <ul>
            {
              newTasks?.map((task, index) => {
                return (
                  <>
                  <li key={task}>{task}</li>
                  <div>
                  <button onClick={() => {handleDeleteTask(index)}}>
                    Excluir Tarefa
                    </button>
                  </div>
                  </>
                )
              })
            }
        </ul>
      </div>
    </div>
  )
}

export default TodoList;