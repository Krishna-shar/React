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
    <div className="w-[50%] p-10 ">
      <h1 className="mb-10 text-5xl font-thin text-white">Set
        <span className=" text-red-400 italic"> Reminders</span> For Task</h1>
      <form onSubmit={SubmitHandler}>
        <input
        className="border-b w-full text-2xl font-thin p-2 outline-o"
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

        <button className="text-xl px-10 py-2 border rounded mt-5">Create Todo</button>
      </form>
    </div>
  );
};

export default App;
