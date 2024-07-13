import React from "react";
import { Todo } from "../App";

interface ClearAllProps {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ClearAll: React.FC<ClearAllProps> = ({ setTodos }) => {
    const handleClearAll = () => {
        setTodos([]);
      };

    return (
        <button onClick={handleClearAll}>全てクリア</button>
    );
};

export default ClearAll;