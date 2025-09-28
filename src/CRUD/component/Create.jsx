import { nanoid } from "nanoid";
import { useState } from "react";

const App = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const [title, settitle] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newtodo = {
      id: nanoid(),
      title,
      isCompleted: false,
    };
    console.log(newtodo);
    const copytodos = [...todos];
    copytodos.push(newtodo);
    settodos(copytodos);
    settitle("");

    // settodos([...todos,newtodo])
  };

  return (
    <div>
      <h1>Create Tasks</h1>
      <form onSubmit={SubmitHandler}>
        <input
          onChange={(e) => {
            settitle(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="title"
        />
        {/* <br />
        <br />
        <input
        checked={completed}
          onChange={(e) => {
            setcompleted(e.target.checked);}}
          type="checkbox"
        />{" "}
        Completed
        <br />
        <input
          value="male"
          onChange={(e) => {
            setgender(e.target.value);
          }}
          checked={gender=="male"&&true}
          type="radio"
        />{" "}
        Male
        <input
          value="female"
          onChange={(e) => {
            setgender(e.target.value);
          }}
          checked={gender=="female"&& true}
          type="radio"
        />{" "}
        female
        <br />

          <select value={city} onChange={(e)=>{setcity(e.target.value)}}>
            <option value="delhi">Delhi</option>
            <option value="hapur">Hapur</option>
            <option value="merrut">Merrut</option>
          </select> */}

        <button>Create Todo</button>
      </form>
    </div>
  );
};

export default App;
