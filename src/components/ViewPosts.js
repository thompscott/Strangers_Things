import React from "react";
import { GetPosts } from "../api";


/*Creates Posts to View*/
const ViewPosts = async () => {
const  posts = await GetPosts()
console.log(posts)


return posts


}





export default ViewPosts;