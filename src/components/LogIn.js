import React , {useEffect, useState} from "react";
import { logIn, register } from "../api";


const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


const LogIn = () => {
  return (
    <div className="login">
      <form onSubmit={handleSubmit({username, password})}>
      <fieldset>
        <label htmlFor="username">Query</label>
        <input
          minLength={1}
          id="username"
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
            console.log({username})
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Query</label>
        <input
          minLength={1}
          id="password"
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            console.log({password})
          }}
        />
      </fieldset>
        <button >Register</button>
        <button>LogIn</button>
      </form>
    </div>
  );
};


async function  handleSubmit(username, password){
    logIn(username,password);
    register(username, password);


}




export default LogIn;