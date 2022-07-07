import React, { useEffect, useState } from "react";
import { logIn, registerAPI } from "../api";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(0);

  return (
    <div className="login">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(username, password, register);
          setRegister(0);
        }}
      >
        <fieldset>
          <label htmlFor="username">Username</label>
          <input
            minLength={1}
            id="username"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(event) => {
              event.preventDefault();
              setUsername(event.target.value);
            }}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            minLength={1}
            id="password"
            type="text"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => {
              event.preventDefault();
              setPassword(event.target.value);

            }}
          />
        </fieldset>
        <button type="submit"
          onClick={() => {
            setRegister(1);
          }}
        >
          Register
        </button>
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};

async function handleSubmit(username, password, register) {

  if (register) {
    const token = await registerAPI(username, password);
    localStorage.setItem("token", token);
  }
  else {
    const token = await logIn(username, password);
    localStorage.setItem("token", token);
  }

        
}


export default LogIn;
