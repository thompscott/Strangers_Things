import React, { useState, useEffect } from "react";
import { ModifyPost } from "./index";
import { GetPosts, getUser, deletePost } from "../api";
import CreatePost from "./CreatePost";
import CreateMessage from "./CreateMessage";
import Search from "./Search";

/*Creates Posts to View*/
const ViewPosts = (props) => {
  const [token] = [props.token];
  const [allPosts, setAllPosts] = useState([]);
  const [modify, setModify] = useState(0);
  const [userId, setUserId] = useState("");
  const [createNewPost, setCreateNewPost] = useState(false);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState("");
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
  console.log(allPosts);
  /*See if searchTerm matches someting in post username, description, price, or title*/
  function postMatches(post, text) {
    text = text.toLowerCase();

    const username = post.author.username.toLowerCase();
    const description = post.description.toLowerCase();
    const price = post.price.toLowerCase();
    const title = post.title.toLowerCase();

    const usernameBool = username.includes(text);
    const descriptionBool = description.includes(text);
    const priceBool = price.includes(text);
    const titleBool = title.includes(text);

    return usernameBool || descriptionBool || priceBool || titleBool;
  }
  const filteredPosts = allPosts.filter((post) =>
    postMatches(post, searchTerm)
  );
  const postsToDisplay = searchTerm.length ? filteredPosts : allPosts;

  /*Creates User Posts JSX*/
  return (
    <div>
      {token ? (
        <div className="createNewPost">
          {createNewPost ? (
            <CreatePost token={token} setCreateNewPost={setCreateNewPost} />
          ) : (
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
        </div>
      ) : null}
      <div className="searchSection">
        <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      </div>
      <div>
        {postsToDisplay
          ? postsToDisplay.map((element) => {
              {
                userId === element.author._id ? console.log(element) : null;
              }

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
                      <div>
                        <h3>Messages</h3>
                        {element.messages.map((messageElement) => {
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
                      {message === element._id ? (
                        <CreateMessage
                          token={token}
                          postId={element._id}
                          setMessage={setMessage}
                        />
                      ) : (
                        <div>
                          <button
                            onClick={() => {
                              setMessage(element._id);
                            }}
                          >
                            Create New Message
                          </button>
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
