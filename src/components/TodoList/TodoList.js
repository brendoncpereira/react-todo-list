import React, { useEffect, useState } from "react";
import styles from './styles.module.css';
import { AddTaskIcon } from '../Icons/Icons';
import { DeleteTaskIcon } from "../Icons/Icons";
import { LightModeIcon } from "../Icons/Icons";
import { DarkModeIcon } from "../Icons/Icons";

const TodoList = () => {

  const [currentTask, setCurrentTask] = useState("")
  const [newTasks, setNewTasks] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  const handleChangeTask = (e) => {
    setCurrentTask(e.target.value)
  }

  const handleAddTask = () => {

    const trimmedTask = currentTask.trim()

    if (trimmedTask !== "") {
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

  const handleToggleMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const data = localStorage.getItem("tasks")
    if (data) {
      setNewTasks(JSON.parse(data))
    }


  }, [])

  useEffect(() => {

    if (newTasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(newTasks))
    }
  }, [newTasks])

  return (
    <div className={`${styles.container} ${darkMode ? styles.containerDarkMode : ""}`}>

      <div className={`${styles.wrapper} ${darkMode ? styles.wrapperDarkMode : ""}`}>
        <h1 className={styles.title}>Lista de Tarefas</h1>

        <div className={styles.labelContainer}>
          <h2 className={styles.label}>Adicione uma nova tarefa</h2>
        </div>

        <div className={styles.inputWrapper}>

          <div className={styles.inputContainer}>
            <input
              onChange={handleChangeTask}
              value={currentTask}
              placeholder="Ex.: Lavar a louça"
              className={styles.taskInput}
            />
          </div>

          <div className={styles.addTaskButtonContainer}>
            <button
              onClick={handleAddTask}
              className={`${styles.addTaskButton} ${darkMode ? "" : styles.addTaskButtonDarkMode}`}
              style={currentTask === "" ? { cursor: "not-allowed", opacity: 0.9, } : null}
            >
              <AddTaskIcon />
            </button>
          </div>
        </div>

        <div className={styles.tasksContainer}>
          <ul>
            {
              newTasks.length > 0 ?
                newTasks.map((task, index) => {
                  return (
                    <>
                      <div className={styles.liTaskWrapper}>
                        <li
                          key={task}
                          className={styles.task}
                        >
                          {task}
                        </li>
                        <button
                          onClick={() => { handleDeleteTask(index) }}
                          className={`${styles.deleteTaskButton} ${darkMode ? "" : styles.deleteTaskButtonDarkMode}`}
                        >
                          <DeleteTaskIcon />
                        </button>
                      </div>
                    </>
                  )
                }) : (
                  <div>
                    <span>Nada por aqui, tente adicionar uma nova tarefa :)</span>
                  </div>
                )
            }
          </ul>
        </div>

        <div>
          <button
            onClick={handleToggleMode}
            className={`${styles.toggleModeButton} ${darkMode ? "" : styles.toggleModeButtonDarkMode}`}
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {darkMode ?
              <LightModeIcon />
              :
              <DarkModeIcon />
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoList;