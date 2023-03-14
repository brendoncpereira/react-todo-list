import React, { useEffect, useRef, useState } from "react";
import styles from './styles.module.css';
import { AddTaskIcon, DeleteTaskIcon, LightModeIcon, DarkModeIcon, EmptyStateIcon } from '../Icons/Icons';


const TodoList = () => {

  const [currentTask, setCurrentTask] = useState("")
  const [newTasks, setNewTasks] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  const colorSettings1 = darkMode ? "#F8F8FF" : "#1D263B"
  const colorSettings2 = darkMode ? "#1D263B" : "#F8F8FF"

  const inputRef = useRef(null);

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

    if (updatedTasks.length > 0) {
      updatedTasks?.splice(index, 1)
      setNewTasks(updatedTasks)
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  }

  const handleToggleMode = () => {
    setDarkMode(prevDarkMode => {
      const newDarkMode = !prevDarkMode;
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      return newDarkMode;
    });
  }

  useEffect(() => {
    const tasks = localStorage.getItem("tasks")
    if (tasks) {
      setNewTasks(JSON.parse(tasks));
    }
  }, [])

  useEffect(() => {

    if (newTasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    }
  }, [newTasks])

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode")
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, [])

  useEffect(() => {
    if (newTasks) {
      inputRef.current.focus()
    }
  }, [newTasks])


  return (
    <div className={`${styles.container} ${darkMode ? styles.containerDarkMode : ""}`}>

      <div className={`${styles.wrapper} ${darkMode ? styles.wrapperDarkMode : ""}`}>
        <h1 className={`${styles.title} ${darkMode ? styles.titleDarkMode : ""}`}>Lista de Tarefas</h1>

        <div className={styles.labelContainer}>
          <h2 className={`${styles.label} ${darkMode ? styles.labelDarkMode : ""}`}>Adicione uma nova tarefa</h2>
        </div>

        <div className={styles.inputWrapper}>

          <div className={styles.inputContainer}>
            <input
              onChange={handleChangeTask}
              value={currentTask}
              placeholder="Ex.: Lavar a louça"
              ref={inputRef}
              className={`${styles.taskInput} ${darkMode ? styles.taskInputDarkMode : ""}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" && currentTask.trim() !== "") {
                  handleAddTask()
                }
              }}
            />
          </div>

          <div className={styles.addTaskButtonContainer}>
            <button
              onClick={handleAddTask}
              className={`${styles.addTaskButton} ${darkMode ? styles.addTaskButtonDarkMode : ""}`}
              style={currentTask === "" ? { cursor: "not-allowed" } : null}
            >
              <AddTaskIcon color={colorSettings2} />
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
                          className={`${styles.task} ${darkMode ? styles.taskDarkMode : ""}`}
                        >
                          {task}
                        </li>
                        <button
                          onClick={() => { handleDeleteTask(index) }}
                          className={`${styles.deleteTaskButton} ${darkMode ? styles.deleteTaskButtonDarkMode : ""}`}
                        >
                          <DeleteTaskIcon color={colorSettings2} />
                        </button>
                      </div>
                    </>
                  )
                }) : (
                  <div className={styles.emptyStateContainer}>
                    <EmptyStateIcon color={colorSettings1} />
                    <p className={`${styles.emptyStateText} ${darkMode ? styles.emptyStateTextDarkMode : ""}`}>Nada novo por aqui...<br /> <span>Tente adicionar algumas tarefas.</span></p>
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
              <LightModeIcon color={"#1D263B"} />
              :
              <DarkModeIcon color={"#F8F8FF"} />
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoList;