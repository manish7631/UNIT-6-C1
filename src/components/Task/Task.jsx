import React from "react";
import styles from "./task.module.css";
import { useState } from "react";
import Counter from "../Counter/Counter";


const Task = ({ e, OnDelete }) => {
  const [done, setDone] = useState(e.isCompleted)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" checked={done} onChange={(e) => {
        setDone(e.target.value)
      }} />
      <div data-cy="task-text" className={done ? styles.striked : ""}>{
        e.text
      }

      </div>
      {/* Counter here */}
      <Counter />
      <button data-cy="task-remove-button" onClick={() => {
        if (done) {
          OnDelete(e.id)
        }

      }}>Delete</button>

    </li>
  );
};

export default Task;
