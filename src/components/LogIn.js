import React from "react";
import { logIn, register } from "../api";

const LogIn = () => {
  return (
    <div className="login">
      <form onSubmit={handleSubmit()}>
        <input type='text' minLength={1} />

        <input type='text' minLength={1} />

        <button onClick={}>Register</button>
        <button>LogIn</button>
      </form>
    </div>
  );
};


async function  handleSubmit(username, password){
    logIn(username,password);
    register(username, password);


}