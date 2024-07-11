import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputText) {
      return;
    }

    const newTodo: Todo = {
      inputValue: inputText,
      id: todos.length,
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    setInputText("");
  };

  const handleEdit = (id: number, inputValue: string) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));
    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleChecked = (id: number, checked: boolean) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));
    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>TypescriptでTodoリスト</h2>
        <TodoForm
          inputText={inputText}
          setInputText={setInputText}
          handleSubmit={handleSubmit}
        />
        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
