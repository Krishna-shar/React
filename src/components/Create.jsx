import { useState } from "react";

const Create = (props) => {
  const [fullname, setfullname] = useState("");
  const [age, setage] = useState(18);
  const submitHandler = (e) => {
    e.preventDefault();
    const newuser = { fullname, age };
    console.log(newuser);
    // det the uder in the setusers
  };

  return (
    <div>
      <h1>Register Users</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setfullname(e.target.value)}
          value={fullname}
          type="text"
          placeholder="Full Name"
        />
        <input
          onChange={(e) => setage(e.target.value)}
          value={age}
          type="number"
          placeholder="number"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
