import React, { useEffect, useState } from "react";
import { logIn, registerAPI } from "../api";

{/*Returns the Login/Register Page in JSX*/}
const LogIn = (props) => {
  const [setToken, username, setUsername] = [props.setToken, props.username, props.setUsername];
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(0);

  return (
    <div>
      {/*Page Title*/}
      <div className="pageTitle">
        <h2>Login/Logout</h2>
      </div>

      {/*Log Out Button*/}
      {localStorage.getItem("token") ? (
        <div className="loginout">
          <h3 className="loggedin">Logged in as {username}</h3>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("username")
              setToken("");
              setPassword("");

            }}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="login">
          <h3>Login/Register</h3>
          {/*Login/Register Form*/}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit(username, password, register, setToken);
              setRegister(0);
            }}
          >
            {/*Login Form Text Boxes*/}
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
            <button type="submit">Login</button>
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
      )}
    </div>
  );
};

{/*API Call, Login and Register*/}
async function handleSubmit(username, password, register, setToken) {
  if (register) {
    const token = await registerAPI(username, password);
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    setToken(token);
  } else {
    const token = await logIn(username, password);
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    setToken(token);
  }
}

export default LogIn;
