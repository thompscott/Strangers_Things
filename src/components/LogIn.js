import React, { useEffect, useState } from "react";
import { logIn, registerAPI } from "../api";

const LogIn = (props) => {
  const [token, setToken] = [props.token, props.setToken];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(0);

  return logInLogOut();

  function logInLogOut() {
    return localStorage.getItem("token") ? (
      <div>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            setToken("");
            setPassword("");
          }}
        >
          Log Out
        </button>
      </div>
    ) : (
      <div className="login">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(username, password, register, setToken);
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
        {/* Buttons*/}
          <button type="submit">LogIn</button>
          <button
            type="submit"
            onClick={() => {
              setRegister(1);
            }}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
};

async function handleSubmit(username, password, register, setToken) {
  if (register) {
    const token = await registerAPI(username, password);
    localStorage.setItem("token", token);
    setToken(token);
  } else {
    const token = await logIn(username, password);
    localStorage.setItem("token", token);
    setToken(token);
  }
}

export default LogIn;
