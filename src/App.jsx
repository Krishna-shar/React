import { useState } from "react";

const App = () => {
  const [users, setusers] = useState([
    { name: "Jhonty", age: 20 },
    { name: "Shonty", age: 21 },
    { name: "Monty", age: 22 },
  ]);

  const renderUser = users.map((user, index) => {
    return <li key={index}>{user.name}</li>;
  });

  return (
    <div>
      <h1>User Data</h1>
      <ol>{renderUser}</ol>
    </div>
  );
};

export default App;
