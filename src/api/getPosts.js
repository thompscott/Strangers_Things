import React from "react";

const cohortName = '2206-FTB-ET-WEB-FT';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/`;





/*Gets Posts from Database*/
const GetPosts = async () => {
    await fetch(`${APIURL}/posts`)
    .then(response => response.json())
    .then(result => {
        console.log(result)
    })
    .catch(console.error);
}

export default GetPosts;