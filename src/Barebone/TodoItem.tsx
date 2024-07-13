import React from "react";

interface Todo {
  inputValue: string;
  id: number;
  checked: boolean;
}

interface TodoItemProps {
  todo: Todo;
  handleEdit: (id: number, inputValue: string) => void;
  handleChecked: (id: number, checked: boolean) => void;
  handleDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  handleEdit,
  handleChecked,
  handleDelete,
}) => {
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => handleChecked(todo.id, todo.checked)}
      />
      <input
        type="text"
        value={todo.inputValue}
        onChange={(e) => handleEdit(todo.id, e.target.value)}
        disabled={todo.checked}
      />
      <button style={{ padding: "4px" }} onClick={() => handleDelete(todo.id)}>
        消
      </button>
    </li>
  );
};

export default TodoItem;
