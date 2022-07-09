import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
<BrowserRouter>
<div>
<nav id='navigation'>
            <Link to="/posts">Posts</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
          <App/>
          
</div>

</BrowserRouter>);


