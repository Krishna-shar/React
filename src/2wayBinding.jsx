import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [users, setusers] = useState([
    { name: "Jhonty", age: 20 },
    { name: "Shonty", age: 21 },
    { name: "Monty", age: 22 },
  ]);
  return (
    <div>
      <Create />
      <Read users={users} setusers={setusers} />
    </div>
  );
};

export default App;

// two way binding is just for FORM elements
