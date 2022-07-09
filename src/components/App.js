import React, { useState } from "react";
import ViewPosts from "./ViewPosts";
import LogIn from "./LogIn";
import CreatePost from "./CreatePost";
import {Routes, Route } from "react-router-dom";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  return (
  

        
          


          <Routes>
            <Route path="/posts" element={<ViewPosts token={token} />} />
            <Route path="/profile" element={<p>profile</p>} />
            <Route path="/login" element={<LogIn token={token} setToken={setToken} />} />
            <Route path="/register" element={<LogIn token={token} setToken={setToken} />} />

          </Routes>
      
      
      
 
     
  );
};

export default App;
