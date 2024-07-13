import React, { useState } from "react";
import TodoForm from "./Barebone/TodoForm";
import TodoList from "./Barebone/TodoList";
import ClearAll from "./NewFeature/ClearAll";
import "./App.css";

export type Todo = {
  inputValue: string;
  inputDate: string;
  id: number;
  checked: boolean;
};

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputDate, setInputDate] = useState("");

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
          inputDate={inputDate}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
        <br />
        <TodoList
          todos={todos}
          setTodos={setTodos}
        />
        <br />
        <ClearAll
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default App;
