import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [recentDeleted, setRecentDeleted] = useState(null);

  const addTask = (text) => {
    if (!text.trim()) return;

    setTasks([
      ...tasks, 
      { id: Date.now(), text, completed: false }
    ]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task => 
        task.id === id
        ? { ...task, completed: !task.completed }
        : task

    ));
  };

  const deleteTask = (id) => {
    const deleted = tasks.find(task => task.id === id);
    setRecentDeleted(deleted);
    setTasks(tasks.filter(task => task.id !==id));
  };

  const undoDelete = () => {
    if (!recentDeleted) return;
      setTasks([...tasks, recentDeleted]);
      setRecentDeleted(null);
    }

  return (
    <div className="app-container">
      <div className="header-section">
        <h1>My To-Do List🤍</h1>
        <TodoForm onAdd={addTask} />
        {recentDeleted && (
          <button className="undo-btn" onClick={undoDelete}>
            Undo Delete
          </button>
        )}
      </div>

      <div className="list-area">
        {tasks.length === 0 ? (
        <p className="empty">No tasks yet 🖋</p>
        ) : (
          <TodoList 
          tasks={tasks} 
          onToggle={toggleTask} 
          onDelete={deleteTask} 
          />
        )}
      </div>

    </div>
  );
};

export default App;