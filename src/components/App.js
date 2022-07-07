import React, { useState } from "react";
import ViewPosts from "./ViewPosts";
import LogIn from "./LogIn";  





const App =  () =>{
  const [token, setToken] = useState('');
  
    return (
    <div>
        <LogIn token={token} setToken={setToken}  />
    </div>)
  }

export default App