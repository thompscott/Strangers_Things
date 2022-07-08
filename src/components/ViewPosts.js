import React, { useState, useEffect } from "react";
import { GetPosts } from "../api";

/*Creates Posts to View*/
const ViewPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const fetchAllPosts = async () => {
    const data = await GetPosts();
    const posts = data.data.posts;
    setAllPosts(posts);
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  /*Creates User Posts JSX*/
  return (
    <div>
      {allPosts ? allPosts.map((element) => {
        return (
          <div key={element._id} className="">
            <h2 className="postsTitle">{element.title}</h2>
            <p className="userPosts">{element.author.username}</p>

            <p className="postsDescription">{element.description}</p>
            <p className="price">{element.price}</p>
            <p className="deliveryOption">{element.willDeliver}</p>
            <button>Modify Post </button>
            <button>Delete Post</button>
          </div>
        );
      }): null}
    </div>
  );
};

export default ViewPosts;
