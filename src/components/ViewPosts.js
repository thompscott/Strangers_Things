import React from "react";
import { GetPosts } from "../api";


/*Creates Posts to View*/
const ViewPosts = async () => {
    const  data = await GetPosts()
    const posts = data.data.posts;
    console.log(data);
    console.log(posts);

    /*Creates User Posts JSX*/
    posts.map(() => {
        return(
            <div key={posts._id} className="">

            </div>
        )
    });



}





export default ViewPosts;