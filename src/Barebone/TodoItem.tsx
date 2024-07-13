import React from "react";
import { Todo } from "../App";

interface TodoItemProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, todos, setTodos }) => {
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

  const handleDueDate = (id: number, inputDate: string) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));
    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.inputDate = inputDate;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <tr key={todo.id}>
      <td style={{ textAlign: "center" }}>
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => handleChecked(todo.id, todo.checked)}
        />
      </td>
      <td>
        <input
          type="text"
          value={todo.inputValue}
          onChange={(e) => handleEdit(todo.id, e.target.value)}
          disabled={todo.checked}
        />
      </td>
      <td>
        <input
          style={{ padding: "6px" }}
          type="date"
          value={todo.inputDate}
          min="2001-08-19"
          max="2050-01-01" // 年月日
          onChange={(e) => handleDueDate(todo.id, e.target.value)}
          disabled={todo.checked}
        />
      </td>
      <td>
        <button
          style={{ padding: "4.5px", width: "100%" }}
          onClick={() => handleDelete(todo.id)}
        >
          消
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
