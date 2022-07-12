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

  return (
    <Routes>
      <Route path="/posts" element={<ViewPosts token={token} />} />
      <Route path="/profile" element={<Profile token={token} setToken={setToken} />} />
      <Route
        path="/login"
        element={<LogIn setToken={setToken} />}
      />
      <Route
        exact path="/"
        element={<LogIn setToken={setToken} />}
      />
    </Routes>
  );
};

export default App;
