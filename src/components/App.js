import React, { useState } from "react";
import ViewPosts from "./ViewPosts";
import LogIn from "./LogIn";
import CreatePost from "./CreatePost";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  return (
    <div>
      <LogIn token={token} setToken={setToken} />
      <ViewPosts token={token} />
    </div>
  );
};

export default App;
