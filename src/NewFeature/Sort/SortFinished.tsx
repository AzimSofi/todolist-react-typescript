import React from "react";
import { Todo } from "../../App";

interface SortFinishedProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SortFinished: React.FC<SortFinishedProps> = ({ todos, setTodos }) => {
  const handleSort = () => {
    const copyTodos = [...todos];
    const completedTodos = copyTodos.filter((todo) => todo.checked);
    const uncompletedTodos = copyTodos.filter((todos) => !todos.checked);

    const sortedTodos = [...uncompletedTodos, ...completedTodos];
    setTodos(sortedTodos);
  };

  return <button onClick={handleSort}>整理</button>;
};

export default SortFinished;
