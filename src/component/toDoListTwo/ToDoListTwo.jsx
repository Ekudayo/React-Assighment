import { useState } from "react";
import styles from "../toDoListTwo/toDoListTwo.module.CSS"; // Assuming you have a CSS file for styles

const ToDoListTwo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
  };
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTasks(updatedTasks);
  };
  const removeTask = (id) => {
    const updatedTasks = tasks.filter((item) => item.id !== id);
    setTasks(updatedTasks);
  };
  return (
    <div>
      <h2>To-Do-List</h2>
      <div>
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
        <ul>
          {tasks.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(item.id)}
              />
              {item.text}
              <button onClick={() => removeTask(item.id)}>
                <i class="fa-solid fa-xmark"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoListTwo;
