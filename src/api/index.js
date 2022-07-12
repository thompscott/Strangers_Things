import React from "react";

const cohortName = "2206-FTB-ET-WEB-FT";
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/`;

/*Gets Posts from Database*/
export const GetPosts = async (token) => {
  try {
    const response = await fetch(`${APIURL}/posts`, { headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }});
    const result = response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

/*Logs In User*/
export const logIn = async (username, password) => {
  try {
    const response = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    const token = result.data.token;
    return token;
  } catch (error) {
    console.error(error);
  }
};

/*Registers User*/
export const registerAPI = async (username, password) => {
  try {
    const response = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    const token = result.data.token;
    return token;
  } catch (error) {
    console.error(error);
  }
};

/*Creates Post*/
export const createPost = async (posts, token) => {
  try {
    const response = await fetch(`${APIURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: posts,
      }),
    });
    const result = await response.json();
  } catch (error) {
    console.error(error);
  }
};

/*Modifies Post*/
export const modifyPost = async (posts, token, postId) => {
  try {
    const response = await fetch(`${APIURL}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: posts,
      }),
    });
    const result = await response.json();
  } catch (error) {
    console.error(error);
  }
};

/*Gets User Data*/
export const getUser = async (token) => {
  try {
    const response = await fetch(`${APIURL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;

  } catch (error) {
    console.error(error);
  }
};

/*Deletes Post*/
export const deletePost = async (token, postId) =>{
    try {
        const response = await fetch(`${APIURL}/posts/${postId}`, {  
          method : "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });   
        const result = await response.json();
        return result;
      } catch (error) {
        console.error(error);
      }

};

/*Sends Message*/
export const sendMessage=  async (token, postId, message) => {
  try {
    const response = await fetch(`${APIURL}/posts/${postId}/messages`, {  
      method : "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content: message
        }
      })
  
    });   
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }


}
