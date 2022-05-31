import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Task from "./components/Task/Task";
import Result from "./components/Result/result";
import { v4 as uuidv4 } from "uuid";

export interface todo {
  title: string;
  done: boolean;
  id: string;
}

function App() {
  const [todos, setTodos] = useState<todo[] | []>([]);

  const setNewTodo = (newTodoTitle: string) => {
    setTodos([...todos, { title: newTodoTitle, done: false, id: uuidv4() }]);
  };

  /**
   * [{id: 1, done: false}, { id: 2, done: true }];
   * { id: 2, done: false }
   * 1
   * splice(1, { id: 2, done: false })
   */

  const updateStatus = (id: string, status: boolean) => {
    const task = todos.find((todo) => todo.id === id);

    if (task) {
      task.done = status;
      const taskIndex = todos.findIndex((todo) => todo.id === id);
      const todosCpy = [...todos];

      todosCpy.splice(taskIndex, 1, task);
      setTodos(todosCpy);
    }
  };

  const deleteTask = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const updateTask = (id: string, title: string) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      todo.title = title;
      //const updated = [ntodo]
      const todoIndex = todos.findIndex((todo) => todo.id === id);
      const newTodo = [...todos];
      newTodo.splice(todoIndex, 1, todo);
      setTodos(newTodo);
    }

  };
  const deleteChecked = () => {
    const checkedTodo = todos.filter((todo) => todo.done !== true);
    setTodos(checkedTodo);
  };

  return (
    <div className="root">
      <div className="container">
        <Input setNewTodo={setNewTodo} />
        <div className="tasks-container">
          {todos.map((todo) => (
            <Task
              key={todo.id}
              title={todo.title}
              done={todo.done}
              id={todo.id}
              updateStatus={updateStatus}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </div>
        
          <Result 
          todos={todos}
          deleteChecked={deleteChecked} />

      </div>
    </div>
  );
}

export default App;
