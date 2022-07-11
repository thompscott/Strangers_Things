import React, { useState, useEffect } from "react";
import { createPost } from "../api";

const CreatePost = (props) => {
  const [token, setCreateNewPost] = [props.token, props.setCreateNewPost];
  const [deliveryCheck, setDeliveryCheck] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="createPost">
      <form
    
        onSubmit={(event) => {
          event.preventDefault();

          const postObj = {
            title: title,
            description: description,
            price: price,
            willDeliver: deliveryCheck,
          };
          createPost(postObj, token);
          setCreateNewPost(false);
        }}
      >
        <div className="createInputs">
          <label htmlFor="title">Title</label>
        <fieldset className="createfieldset">
          <input
            minLength={1}
            id="title"
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(event) => {
              event.preventDefault();
              setTitle(event.target.value);
            }}
          />
        </fieldset>
          <label htmlFor="description">Description</label>
        <fieldset className="createfieldset" >
          <input
            minLength={1}
            id="description"
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(event) => {
              event.preventDefault();
              setDescription(event.target.value);
            }}
          />
        </fieldset>
          <label htmlFor="price">Price</label>
        <fieldset className="createfieldset" >
          <input
            minLength={1}
            id="price"
            type="text"
            placeholder="Set Price"
            value={price}
            onChange={(event) => {
              event.preventDefault();
              setPrice(event.target.value);
            }}
          />
        </fieldset>
        <fieldset className="createfieldset">
          <label  htmlFor="willDeliver">Will You Deliver?</label>
          <input className="checkbox"
            id="willDeliver"
            type="checkbox"
            onChange={(event) => {
              setDeliveryCheck(!deliveryCheck);
            }}
          />
        </fieldset>
        </div>
        <button className="createPostButton" type="submit">Create Post</button>
        <button className="cancelCreatePost"
          onClick={() => {
            setCreateNewPost(false);
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
