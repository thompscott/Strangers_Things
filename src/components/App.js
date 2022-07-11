import React, { useState } from "react";
import ViewPosts from "./ViewPosts";
import LogIn from "./LogIn";
import CreatePost from "./CreatePost";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  return (
    <Routes>
      <Route path="/posts" element={<ViewPosts token={token} />} />
      <Route path="/profile" element={<Profile token={token} />} />
      <Route
        path="/login"
        element={<LogIn token={token} setToken={setToken} />}
      />
      <Route
        exact path="/"
        element={<LogIn token={token} setToken={setToken} />}
      />
    </Routes>
  );
};

export default App;
