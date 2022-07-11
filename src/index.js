import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
<BrowserRouter>
<div>
  <header>
    <h1>Stranger's Things</h1>
  </header>
<nav id='navigation'>
            <Link to="/posts">Posts</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login/Register</Link>
            
          </nav>
          <App/>
          
</div>

</BrowserRouter>);


