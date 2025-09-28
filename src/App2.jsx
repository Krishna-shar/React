import React from "react";
import { useState } from "react";

const App = () => {
  const Profile = [
    { name: "john", age: 20 },
    { name: "jhonty", age: 21 },
    { name: "shonty", age: 22 },
  ];

  const updatedProfiles = Profile.map((Profile, index) => {
    return (
      <li key={index}>
        <span>Name :- {Profile.name}</span>

        <small>
          Age : - {Profile.age} <br />
        </small>
        <br />
      </li>
    );
  });

  const[username,setUsername] = useState('Krishna')


  const changeHandler = () => {
    setUsername('Rocky sharma')
  };


  return (
    <div>
      <h1>Rendering Json</h1>
      <ol>{updatedProfiles}</ol>

      <h1>Username</h1>
      <h2>{username}</h2>
      <button onClick={changeHandler}>Change name</button>
      
    </div>
  );
};
export default App;







