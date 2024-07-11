import React, { useState } from "react"; // フック
import "./App.css";

function App() {
  // 定義
  // [変数, setter()] = 初期化
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // クラスみたいな感じ
  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  // handleChangeは変数、関数を代入する
  // 「e」は関数の引数、React.ChangeEvent<HTMLInputElement>形、target.valueを使うように
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    // preventDefault()はJavascriptのイベントオブジェクト「e」のメソッド
    // 動作をキャンセルする
    e.preventDefault();

    // e.target = イベントが発生した要素 = <input>
    // .value = 要素の現在の値を取得する = ユーザの入力
    setInputText(e.target.value);
  };

  // preventDefault: () => voidはjavascriptの一般的なオブジェクト型
  //　それとも e: React.FormEvent<HTMLFormElement>　もOK
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!inputText) {
      return;
    }

    //新しいTodo作成
    const newTodo: Todo = {
      inputValue: inputText, // className="inputText"
      id: todos.length, // todos変数の配列のサイズ
      checked: false, 
    };

    setTodos([newTodo, ...todos]); // 配列・追加
    console.log(inputText);
    setInputText(inputText);
  };

  //todo編集
  const handleEdit = (id: number, inputValue: string) => { // id, inputValue = 引数
    // 元の配列をミューテート（直接変更）するのを防ぐため
    const deepCopy = todos.map((todo) => ({ ...todo }));
    console.log(deepCopy);

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });

    // 元のメモリを共有する
    // /* シャローコピー */
    // const newTodos = todos.map((todo) => {
    //   if (todo.id === id) {
    //     todo.inputValue = inputValue;
    //   }
    //   return todo;
    // });

    setTodos(newTodos);
  };

  //完了未完了
  const handleChecked = (id: number, checked: boolean) => {
    /* ディープコピー(完全にコピーされた別の配列)に変えよう(ミューテートから守るため) */
    const deepCopy = todos.map((todo) => ({ ...todo }));
    // console.log(deepCopy);

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        //反転
        todo.checked = !checked;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  //削除
  const handleDelete = (id: number) => {
    //idが正しくないのは残す。正しいと消す。
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div>
        <h2>Todoリスト with Typescript</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            className="inputText"
          />
          <input type="submit" value="作成" className="submitButton" />
        </form>
        {/* タスク設定が完了したら */}
        <ul className="todoList">
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                value={todo.inputValue}
                onChange={(e) => handleEdit(todo.id, e.target.value)}
                disabled={todo.checked}
              />
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleChecked(todo.id, todo.checked)}
              />
              <button onClick={() => handleDelete(todo.id)}>消</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
