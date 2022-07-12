import React, { useState, useEffect } from "react";
import { ModifyPost } from "./index";
import { GetPosts, getUser, deletePost } from "../api";
import CreatePost from "./CreatePost";
import CreateMessage from "./CreateMessage";
import Search from "./Search";

/*Creates Posts JSX*/
const ViewPosts = (props) => {
  const [token, username] = [props.token, props.username];
  const [allPosts, setAllPosts] = useState([]);
  const [modify, setModify] = useState(0);
  const [userId, setUserId] = useState("");
  const [createNewPost, setCreateNewPost] = useState(false);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState("");

  /*Gets Posts and User Id*/
  const fetchAllPosts = async () => {
    /*API Call, Get Posts*/
    const data = await GetPosts(token);
    const posts = data.data.posts;
    setAllPosts(posts);

    /*API Call Get User Id*/
    if (token) {
      const userData = await getUser(token);
      const userIdIn = userData.data._id;
      setUserId(userIdIn);
    }
  };
  useEffect(() => {
    fetchAllPosts();
  }, []);
  console.log(allPosts);


  /*See if searchTerm matches someting in post username, description, price, or title*/
  function postMatches(post, text) {
    /*Convert to Lower Case*/
    text = text.toLowerCase();

    const username = post.author.username.toLowerCase();
    const description = post.description.toLowerCase();
    const price = post.price.toLowerCase();
    const title = post.title.toLowerCase();

    /*Compare*/
    const usernameBool = username.includes(text);
    const descriptionBool = description.includes(text);
    const priceBool = price.includes(text);
    const titleBool = title.includes(text);

    return usernameBool || descriptionBool || priceBool || titleBool;
  }

  /*Filters Post by Search*/
  const filteredPosts = allPosts.filter((post) =>
    postMatches(post, searchTerm)
  );
  const postsToDisplay = searchTerm.length ? filteredPosts : allPosts;

  /*Creates User Posts JSX*/
  return (
    <div>
      {/*Page Title and Search Bar*/}
      <div className="pageTitle">
      <h2>Posts</h2>
      {/*Search Bar*/}
      <div className="searchSection">
        <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      </div>
      
      </div>
      
      {/*Create New Post Button*/
      token ? (
        <div className="createNewPost">
          {createNewPost ? (
            <CreatePost token={token} setCreateNewPost={setCreateNewPost} />
          ) : (
            <div>
              {token ? <h3 className="loggedin">Logged in as {username}</h3> : <h3 className="loggedin">Log In to Create/Edit Posts, Send Messages</h3>
              }
              <button className="createPostButton"
                onClick={() => {
                  setCreateNewPost(true);
                }}
              >
                Create New Post
              </button>
            </div>
          )}
        </div>
      ) : null}
      

      <div>
        {/*Displays Posts*/
        postsToDisplay
          ? postsToDisplay.map((element) => {
              {
                userId === element.author._id ? console.log(element) : null;
              }

              return (
                /*Post*/
                <div key={element._id} className="Posts">
                  <h2 className="postTitle">{element.title}</h2>
                  <p className="userPosts">Posted By: {element.author.username}</p>
                  <p className="postsDescription">Description: {element.description}</p>
                  <p className="price">Price: {element.price}</p>
                  <p className="deliveryOption">Will Deliver: {element.willDeliver ? "Yes" : "No"}</p>
                  
                  {/*Modify Post*/}
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

                  {/*Modify Post Button*/}
                  {userId === element.author._id ? (
                    <div>
                      {modify === 0 ? 
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

                        {/*Delete Post Button*/}
                        <button className="cancelButton"
                          onClick={() => {
                            deletePost(token, element._id);
                            return;
                          }}
                        >
                          Delete Post
                        </button>{" "}
                      </div>: null }

                      {/*Display Messages*/}
                      <div>
                        <h3>Messages</h3>
                        {element.messages.map((messageElement) => {
                          console.log(messageElement,)
                          return (
                            <div key={messageElement._id}>
                              <p>{messageElement.content}</p>
                              <p>
                                Sent From: {messageElement.fromUser.username}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div>

                      {/*Create Message*/}
                      {message === element._id ? (
                        <CreateMessage
                          token={token}
                          postId={element._id}
                          setMessage={setMessage}
                        />
                      ) : (
                        <div>
                          
                          {/*Create Message Button*/}
                          {token ? <button
                            onClick={() => {
                              setMessage(element._id);
                            }}
                          >
                            Create New Message
                          </button> : null}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ViewPosts;
