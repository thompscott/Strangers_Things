import React from "react";

const cohortName = '2206-FTB-ET-WEB-FT';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/`;





/*Gets Posts from Database*/
export const GetPosts = async () => {
    try {
        const response = await fetch(`${APIURL}/posts`);
        const result = response.json();
        return result;
    }
    catch (error) {
        console.error(error);
    }
    
}


export const logIn = async (username, password) => {
    try {
        const response = await fetch(`${APIURL}/users/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: {username},
                password: {password}
            }
        })
    });
        const result = response.json();
        return result;
    }
    catch (error) {
        console.error(error);
    }
}

export const register = async (username, password) => {
    try {
        const response = await fetch(`${APIURL}/users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: {username},
                password: {password}
            }
        })
    });
        const result = response.json();
        return result;
    }
    catch (error) {
        console.error(error);
    }
}