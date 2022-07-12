import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/*Renders Webpage*/
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
<BrowserRouter>
<div>
  <header>
    <h1>Stranger's Things</h1>
    <nav id='navigation'>
            <Link className="tab" to="/posts">Posts</Link>
            <Link className="tab" to="/profile">Profile</Link>
            <Link className="tab" to="/login">Login/Logout/Register</Link>
          </nav>
  </header>
          <App/>
          
</div>

</BrowserRouter>);


