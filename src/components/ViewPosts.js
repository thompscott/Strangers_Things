import React, { useState, useEffect } from "react";
import { ModifyPost } from "./index"
import { GetPosts } from "../api";

/*Creates Posts to View*/
const ViewPosts = (props) => {
  const [token] = [props.token];
  const [allPosts, setAllPosts] = useState([]);
  const [modify, setModify] = useState(false);
  const fetchAllPosts = async () => {
    const data = await GetPosts();
    const posts = data.data.posts;
    setAllPosts(posts);
  };
console.log(token);
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
            {modify ? <ModifyPost token={token} postId={element._id} titleIn={element.title} descriptionIn={element.description} priceIn={element.price} deliveryCheckIn={element.willDeliver}/>: null}
            <button onClick={() =>{
              setModify(true);
              return ;
            }
            }>Modify Post </button>
            <button>Delete Post</button>
          </div>
        );
      }): null}
    </div>
  );
};

export default ViewPosts;
