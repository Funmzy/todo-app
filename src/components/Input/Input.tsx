import React, { useState } from "react";
import { todo } from "../../App";
//
// style={{width: "90%", padding: "10px 20px"}}
// style={{width: "10%"}}

interface IProp {
  setNewTodo: (title: string) => void;
}

const Input: React.FC<IProp> = ({ setNewTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    setNewTodo(title);
    setTitle("");
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <input
        type="text"
        name="input"
        id="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ flex: 0.9, padding: "10px 20px" }}
      />
      <button onClick={handleSubmit} style={{ flex: 0.09 }}>
        +
      </button>
    </div>
  );
};

export default Input;
