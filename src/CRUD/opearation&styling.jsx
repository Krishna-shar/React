import { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, tiltle: "Kaam karle bhai", icCompleted: false },
  ]);
  const [title, settitle] = useState("");
  const [completed, setcompleted] = useState(false);
  const [gender, setgender] = useState();
  const [city, setcity] = useState('delhi');


  return (
    <div>
      <h1>Create Tasks</h1>
      <form>
        <input
          onChange={(e) => {
            settitle(e.target.value);
            console.log(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
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
          </select>

        <button>Create Todo</button>
      </form>
    </div>
  );
};

export default App;
