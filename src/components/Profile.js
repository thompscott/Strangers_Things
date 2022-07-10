import React, { useState, useEffect } from "react";
import { getUser } from "../api";

const Profile = (props) => {
  const [token] = [props.token];

  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");

  const fetchUser = async () => {
    const userData = await getUser(token);
    console.log(userData, "data");
    setUser(userData.data._id);
    setMessages(userData.data.messages);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default Profile;
