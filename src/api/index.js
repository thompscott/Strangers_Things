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
                username: username,
                password: password
            }
        })
    });
        const result = await response.json();
        const token = result.data.token;
        return token;
    }
    catch (error) {
        console.error(error);
    }
}

export const registerAPI = async (username, password) => {
    try {
        const response = await fetch(`${APIURL}/users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password
            }
        })
    });
        const result = await response.json();
        const token = result.data.token;
        return token;
    }
    catch (error) {
        console.error(error);
    }
}

export const createPost= (titleAPI, descriptionAPI, priceAPI, willDeliverAPI, token)=> {

    try {
        const response = await fetch(`${APIURL}/posts`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            user: {
                title: titleAPI,
                description: descriptionAPI,
                price: priceAPI,
                willDeliver: willDeliverAPI
            }
        })
    });
        const result = await response.json();
       console.log(result, "result")
    }
    catch (error) {
        console.error(error);
    }
}
