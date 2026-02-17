import { useState } from "react";

const TodoForm = ({ onAdd }) => {
    const [text, setText] = useState("");

    const handleAdd = () => {
        if (!text.trim()) return;
        onAdd(text);
        setText("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleAdd();
        }
    };

    return (
    <div className="input-section">
        <input
          type="text"
          placeholder="Add a task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          />
          <button onClick={handleAdd}>Add</button>
      </div>
    );
}

export default TodoForm;


