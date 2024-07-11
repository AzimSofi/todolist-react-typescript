import React from "react";

interface TodoFormProps {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ inputText, setInputText, handleSubmit }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        className="inputText"
      />
      <input type="submit" value="作成" className="submitButton" />
    </form>
  );
};

export default TodoForm;
