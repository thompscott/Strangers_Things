import React, { useState } from "react";
import ViewPosts from "./ViewPosts";
import LogIn from "./LogIn";  
import CreatePost from "./CreatePost";





const App =  () =>{
  const [token, setToken] = useState('');
  
    return (
    <div>
        {/* <LogIn token={token} setToken={setToken}  /> */}
        <CreatePost token ={token}/>
    </div>)
  }

export default App