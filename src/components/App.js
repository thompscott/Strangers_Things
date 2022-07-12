import React, { useState } from "react";
import ViewPosts from "./ViewPosts";
import LogIn from "./LogIn";
import CreatePost from "./CreatePost";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";

{/*Returns All JSX but Header*/}
const App = () => {
  {/*Get Token From Browser if Present*/}
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [username, setUsername] = useState(localStorage.getItem("username") ? localStorage.getItem("username") : "");

  return (
    <Routes>
      <Route path="/posts" element={<ViewPosts username={username} token={token} />} />
      <Route path="/profile" element={<Profile username={username} token={token} setToken={setToken} />} />
      <Route
        path="/login"
        element={<LogIn token={token} setToken={setToken} username={username} setUsername={setUsername} />}
      />
      <Route
        exact path="/"
        element={<LogIn token={token} setToken={setToken} username={username} setUsername={setUsername} />}
      />
    </Routes>
  );//worthless comment
};

export default App;
