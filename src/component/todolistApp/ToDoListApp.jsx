import { useState, useEffect } from "react";
import styles from "../todolistApp/ToDoListApp.module.css"; // Adjusted import to match the file structure

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    // Retrieve from localStorage on first load
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
    <div className={styles.todoContainer}>
      <h2>📝 My To-Do List</h2>
      <form onSubmit={handleAddTask} className={styles.todoForm}>
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul className={styles.taskList}>
        {tasks.map((item) => (
          <li key={item.id} className={item.completed ? styles.completed : ""}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleComplete(item.id)}
            />
            <span>{item.text}</span>
            <button onClick={() => removeTask(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
