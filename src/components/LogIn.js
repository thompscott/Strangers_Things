import React, { useEffect, useState } from "react";
import { logIn, register } from "../api";

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
              console.log({ username });
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
              console.log({ password });
            }}
          />
        </fieldset>
        <button
          onClick={() => {
            setRegister(1);
          }}
        >
          Register
        </button>
        <button>LogIn</button>
      </form>
    </div>
  );
};

async function handleSubmit(username, password, register) {
  register
    ? () => {
        register(username, password);
        setRegister(0);
      }
    : logIn(username, password);

  console.log(username, password, register, "here");
}

export default LogIn;
