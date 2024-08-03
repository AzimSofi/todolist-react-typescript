import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../App";
import SortFinished from "../NewFeature/Sort/SortFinished";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            完了  
            <br />
            <SortFinished todos={todos} setTodos={setTodos} />
          </th>
          <th>タスク</th>
          <th>締切</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoItem todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
