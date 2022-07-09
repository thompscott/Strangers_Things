import React, { useState, useEffect } from "react";
import { ModifyPost } from "./index";
import { GetPosts, getUser, deletePost } from "../api";
import CreatePost from "./CreatePost";
import CreateMessage from "./CreateMessage";

/*Creates Posts to View*/
const ViewPosts = (props) => {
  const [token] = [props.token];
  const [allPosts, setAllPosts] = useState([]);
  const [modify, setModify] = useState(0);
  const [userId, setUserId] = useState("");
  const [createNewPost, setCreateNewPost] = useState(false);
  const [message, setMessage] = useState(false)
  const fetchAllPosts = async () => {
    const data = await GetPosts(token);
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
      {token ?  <div className="createNewPost">
        {createNewPost ? (
          <CreatePost token={token} setCreateNewPost ={setCreateNewPost}/>
        ) :  (
          <div>
          <button
            onClick={() => {
              setCreateNewPost(true);
            }}
          >
            Create New Post
          </button>
          </div>
        )}

        
      </div> : null}
      
      <div>
        {allPosts
          ? allPosts.map((element) => {
            {userId === element.author._id ? console.log(element): null}
            
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
                      <button
                        onClick={() => {
                          deletePost(token, element._id);
                          return;
                        }}
                      >
                        Delete Post
                      </button>{" "}
                    </div>
                  ) : <div >
                         {message ?  <CreateMessage  token={token}  postId={element._id} setMessage={setMessage} /> :  (
          <div>
          <button
            onClick={() => {
              setMessage(true);
            }}
          >
            Create New Message
          </button>
          </div>
        )}
                  </div> }
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ViewPosts;
