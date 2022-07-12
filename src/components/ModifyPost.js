import React, { useState } from "react";
import { modifyPost } from "../api";

{/*Returns Modify Post JSX*/}
const ModifyPost = (props) => {
  const [
    token,
    postId,
    titleIn,
    descriptionIn,
    priceIn,
    deliveryCheckIn,
    setModify,
  ] = [
    props.token,
    props.postId,
    props.titleIn,
    props.descriptionIn,
    props.priceIn,
    props.deliveryCheckIn,
    props.setModify,
  ];
  const [deliveryCheck, setDeliveryCheck] = useState(deliveryCheckIn);
  const [title, setTitle] = useState(titleIn);
  const [description, setDescription] = useState(descriptionIn);
  const [price, setPrice] = useState(priceIn);

  
  return (
    <div className="modifyPost">

      {/*Modify Post Form*/}
      <form className="modifyForm"
        onSubmit={(event) => {

          {/*API Call, Modify Post*/}
          event.preventDefault();
          const postObj = {
            title: title,
            description: description,
            price: price,
            willDeliver: deliveryCheck,
          };
          modifyPost(postObj, token, postId);
          setModify(0);
        }}
      >
        {/*Modify Post Form Text Boxes*/}
          <label htmlFor="title">Title</label>
        <fieldset>
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
        <fieldset>
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
        <fieldset>
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
          <input className="checkbox"
            id="willDeliver"
            type="checkbox"
            onChange={() => {
              setDeliveryCheck(!deliveryCheck);
            }}
          />
        </fieldset>
        
        {/*Buttons*/}
        <button type="submit">Update Post</button>
        <button className="cancelButton"
          onClick={() => {
            setModify(0);
          }}
        >
          Cancel Update...
        </button>
      </form>
    </div>
  );
};

export default ModifyPost;
