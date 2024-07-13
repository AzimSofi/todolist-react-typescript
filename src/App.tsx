import React, { useState } from "react";
import TodoForm from "./Barebone/TodoForm";
import TodoList from "./Barebone/TodoList";
import ClearAll from "./NewFeature/ClearAll";
import "./App.css";

export type Todo = {
  inputValue: string;
  id: number;
  checked: boolean;
};

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

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
          setTodos={setTodos}
          todos={todos}
        />
        <TodoList
          todos={todos}
          setTodos = {setTodos}
        />
        <ClearAll
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default App;
