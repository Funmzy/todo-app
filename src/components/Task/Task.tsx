import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { todo } from "../../App";
import "./task.css";

interface IProp {
  updateStatus: (id: string, status: boolean) => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, title: string) => void;
}

const Task: React.FC<todo & IProp> = ({
  done,
  title,
  id,
  updateStatus,
  deleteTask,
  updateTask
}) => {
  const [checked, setChecked] = useState(done);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);

  const handleChange = () => {
    setChecked(!checked);
    updateStatus(id, !checked);
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  const handleFormSubmit = (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIsEditing(false);
      updateTask(id, value)
     
    
  }

  return (
    <div className="task">
      <div className="task-left">
        <input
          type="checkbox"
          name=""
          id=""
          className="task-input"
          onChange={handleChange}
          checked={checked}
        />

        {isEditing ? (
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="input"
              id="input"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </form>
        ) : done ? (
          <p>
            <s> {title} </s>
          </p>
        ) : (
          <p>{title}</p>
        )}
      </div>
      <div>
        <FiEdit2 className="icon-edit" onClick={() => setIsEditing(true)} />
        <RiDeleteBin3Fill className="icon-delete" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Task;
