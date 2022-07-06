import React from "react";

const cohortName = '2206-FTB-ET-WEB-FT';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/`;





/*Gets Posts from Database*/
const getPosts = async () => {
    await fetch(`${APIURL}/posts`)
    .then(response => response.json())
    .then(result => {
        return result;
    })
    .catch(console.error);
}

export default getPosts;