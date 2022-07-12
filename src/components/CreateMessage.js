import React, { useState, useEffect } from "react";
import { sendMessage } from "../api";

{
  /*Returns the Create Message Form JSX */
}
const CreateMessage = (props) => {
  const [token, postId, setMessage] = [
    props.token,
    props.postId,
    props.setMessage,
  ];
  const [messageCont, setMessageCont] = useState("");
  return (
    <div className="createMessage">
      {/*Create Post Form*/}

      {/*API Call, Send Message*/}
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await sendMessage(token, postId, messageCont);
          setMessage("");
        }}
      >
        {/*Text Input Boxes*/}
          <label htmlFor="message">Message</label>
        <fieldset className="messageFieldset">
          <textarea
          rows={"5"}
          cols={50}
            minLength={1}
            id="message"
            type="text"
            placeholder="Message"
            value={messageCont}
            onChange={(event) => {
              event.preventDefault();
              setMessageCont(event.target.value);
            }}
          />
        </fieldset>

        {/*Submit Button*/}
        <button type="submit">Send Message</button>

        {/*Cancel Button*/}
        <button className="cancelButton"
          onClick={() => {
            setMessage("");
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreateMessage;
