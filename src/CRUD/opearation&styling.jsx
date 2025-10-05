import { nanoid } from "nanoid";
import { useState } from "react";
import Create from "./component/Create";
import Read from "./component/Read";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "Kaam karle", isCompleted: false },
  ]);

  // const [completed, setcompleted] = useState(false);
  // const [gender, setgender] = useState();
  // const [city, setcity] = useState('delhi');

  return (
    <div className="flex w-screen h-screen bg-gray-700 p-10">
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
