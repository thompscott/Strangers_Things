import React, { useState, useEffect } from "react";
import { createPost } from "../api";

const CreatePost = (props) => {
  const [token] = [props.token];
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
          console.log(token);
          createPost(postObj, token);
        }}
      >
        <fieldset>
          <label htmlFor="title">Title</label>
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
        <fieldset>
          <label htmlFor="description">Description</label>
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
        <fieldset>
          <label htmlFor="price">Price</label>
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
        <fieldset>
          <label htmlFor="willDeliver">Will You Deliver?</label>
          <input
            id="willDeliver"
            type="checkbox"
            onChange={(event) => {
              setDeliveryCheck(!deliveryCheck);
            }}
          />
        </fieldset>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
