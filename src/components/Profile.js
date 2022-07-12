import React, { useState, useEffect } from "react";
import { getUser } from "../api";
import LogIn from "./LogIn";

{/*Returns Profile Page JSX (Messages)*/}
const Profile = (props) => {
  const [token] = [props.token];
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");
  
  {/*API Call, Get User Data*/}
  const fetchUser = async () => {
    const userData = await getUser(token);
    console.log(userData, "data");
    setUser(userData.data._id);
    setMessages(userData.data.messages);
  };
    useEffect(() => {
      if(token) {
        fetchUser();
      }
      
    }, []);
  
  
  
  return (
    <div>
       {/*Page Title*/}
       <div className="pageTitle">
      <h2>Profile Messages</h2>
      </div>
      {/*Display Messages/Prompt Users to Login*/}
      {token ? 
      <div>
        {/*Messages to User*/}
      <h3>Messages To Me</h3>
      {messages.map((element) => {
        return ( element.fromUser. _id !== user ?
          <div key={element._id} className="">
            <p>Post: {element.post.title}</p>
            <p>Message: {element.content}</p>
            <p>From: {element.fromUser.username}</p>
          </div>
          : null
        );
      })}
      {/*Messages From User*/}
      <h3>Messages From Me</h3>
      {messages.map((element) => {
        return element.fromUser._id === user ? (
          <div key={element._id} className="">
            <p>Post: {element.post.title}</p>
            <p>Message: {element.content}</p>
            <p>From: {element.fromUser.username}</p>
          </div>
        ) : null;
      })}
      </div> :
      
      <div>
        {/*Prompt User to Login*/}
        <h3>Log In To View Messages</h3>
      </div>
      }
    </div>
    
  );
};

export default Profile;
