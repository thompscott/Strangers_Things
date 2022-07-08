import React, { useState, useEffect } from "react";
import { modifyPost } from "../api";

const ModifyPost = (props) => {
  const [token, postId, titleIn, descriptionIn, priceIn, deliveryCheckIn] = [props.token, props.postId, props.titleIn, props.descriptionIn, props.priceIn, props.deliveryCheckIn];
  const [deliveryCheck, setDeliveryCheck] = useState(deliveryCheckIn);
  const [title, setTitle] = useState(titleIn);
  const [description, setDescription] = useState(descriptionIn);
  const [price, setPrice] = useState(priceIn);
  console.log(token);
  return (
    <div className="modifyPost">
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
          modifyPost(postObj, token, postId);
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
        <button type="submit">Update Post</button>
        <button type="button">Cancel Update...</button>
      </form>
    </div>
  );
};

export default ModifyPost;
