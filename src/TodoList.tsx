import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
  inputValue: string;
  id: number;
  checked: boolean;
}

interface TodoListProps {
  todos: Todo[];
  handleEdit: (id: number, inputValue: string) => void;
  handleChecked: (id: number, checked: boolean) => void;
  handleDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, handleEdit, handleChecked, handleDelete }) => {
  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleEdit={handleEdit}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
