import React, { useState, useEffect } from "react";
import { ModifyPost } from "./index";
import { GetPosts, getUser } from "../api";

/*Creates Posts to View*/
const ViewPosts = (props) => {
  const [token] = [props.token];
  const [allPosts, setAllPosts] = useState([]);
  const [modify, setModify] = useState(0);
  const [userId, setUserId] = useState("");
  const fetchAllPosts = async () => {
    const data = await GetPosts();
    const posts = data.data.posts;
    setAllPosts(posts);

    const userData = await getUser(token);
    const userIdIn = userData.data._id;
    setUserId(userIdIn);
  };
  useEffect(() => {
    fetchAllPosts();
  }, []);

  /*Creates User Posts JSX*/
  return (
    <div>
      {allPosts
        ? allPosts.map((element) => {
            console.log(element);
            return (
              <div key={element._id} className="">
                <h2 className="postsTitle">{element.title}</h2>
                <p className="userPosts">{element.author.username}</p>

                <p className="postsDescription">{element.description}</p>
                <p className="price">{element.price}</p>
                <p className="deliveryOption">{element.willDeliver}</p>
                {modify === element._id ? (
                  <ModifyPost
                    token={token}
                    postId={element._id}
                    titleIn={element.title}
                    descriptionIn={element.description}
                    priceIn={element.price}
                    deliveryCheckIn={element.willDeliver}
                    setModify={setModify}
                  />
                ) : null}

                {userId === element.author._id ? (
                  <div>
                    {" "}
                    <button
                      onClick={() => {
                        setModify(element._id);
                        return;
                      }}
                    >
                      Modify Post{" "}
                    </button>
                    <button>Delete Post</button>{" "}
                  </div>
                ) : null}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ViewPosts;
