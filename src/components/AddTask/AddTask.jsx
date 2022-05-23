import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";
import Task from "../Task/Task";
import TaskHeader from "../TaskHeader/TaskHeader";


const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [newTodo, setTodo] = useState("")
  const [todos, setTodos] = useState([])



  const OnDelete = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }
  const handlechange = (e) => {
    setTodo(e.target.value)
  }
  return (
    <div className={styles.todoForm}>
      <input value={newTodo} data-cy="add-task-input" type="text" onChange={handlechange} placeholder='Enter task' />
      <button data-cy="add-task-button" onClick={() => {


        todos.map((e) => {
          if (e.value === newTodo) {
            alert("all ready present")

          }
        })

        if (newTodo.length === 0) {
          alert("Todo length should be more than 1char")
        }
        else {
          setTodos([
            ...todos,
            { id: Date.now(), text: newTodo, done: false, count: 0 },])
          setTodo("")
        }
      }
      }>Add</button>

      <h4>
        {

          todos.map((e, i) => {
            return (
              <div key={i}>
                <Task key={e.id} e={e} OnDelete={OnDelete} />

              </div>
            )

          })
        }
      </h4>
    </div>
  );
};

export default AddTask;
