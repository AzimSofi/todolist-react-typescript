import React from "react";
import { Todo } from "../../App"

interface SortDeadlineProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SortDeadline: React.FC<SortDeadlineProps> = ({ todos, setTodos }) => {
    const handleDateSort = () => {
        const sortedTodos = [...todos].sort( (a: Todo, b: Todo) => new Date(a.inputDate).getTime() - new Date(b.inputDate).getTime());
        setTodos(sortedTodos);
    };
    
    return <button onClick={handleDateSort}>整理</button>;
};

export default SortDeadline;
