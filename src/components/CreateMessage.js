import React, { useState, useEffect } from "react";
import { sendMessage } from "../api";

const CreateMessage = (props) => {
  const [token, postId, setMessage] = [props.token, props.postId, props.setMessage];
    const [messageCont, setMessageCont] = useState('')
  return (
    <div className="createMessage">
      <form
        onSubmit={(event) => {
          event.preventDefault(); 
          sendMessage(token, postId, messageCont)
          setMessage('');
        }}
      >
        <fieldset>
          <label htmlFor="message">Message</label>
          <input
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
        <button type="submit">Send Message</button>
        <button
          onClick={() => {
            setMessage('');
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreateMessage;
