const TodoItem = ({ task, onToggle, onDelete }) => {

    return (
        <div className={`todo-item ${task.completed ? "done" : ""}`}>

            <div
              className={`check-circle ${task.completed ? "checked" : ""}`}
              onClick={() => onToggle(task.id)} 
              >
                {task.completed && "\u2714"}
              </div>

            <span className="todo-text">{task.text}</span>

            <button className="delete-btn" 
            onClick={() => onDelete(task.id)}>
              ✖
            </button>
        </div>
    );
}

export default TodoItem;