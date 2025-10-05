import { Fragment } from "react";
import "./Read.css";

const App = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const DeleteHandler = (id) => {
    console.log(id);
    const filtertodos = todos.filter((todo) => todo.id !== id);
    settodos(filtertodos);
  };

  const rendertodos = todos.map((todo) => {
    return (
      <li key={todo.id} className="flex justify-between items-center p-3 bg-gray-900 rounded text-white mb-1 ">
        <span className="text-xl font-thin">{todo.title}</span>{" "}
        <button className="font-thin text-red-900 text-sm" onClick={() => DeleteHandler(todo.id)}>Delete</button>
      </li>
    );
  });

  const DeleteAllHandler = () => {
    settodos([]);
  };

  return (
    <div className="w-[50%] p-10 ">
    
      <h1 className="mb-10 text-5xl font-thin text-white"> 
        <span className="text-pink-400 italic">Pending</span> Todos</h1>
      <ol>{rendertodos}</ol>
      <span onClick={() => DeleteAllHandler()}>Delete All</span>
    </div>
  );
};

export default App;
