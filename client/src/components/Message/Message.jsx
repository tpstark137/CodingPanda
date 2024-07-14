import React from "react";
import "./Message.css";

const Message = () => {
  return (
    <div className="message-root">
      <div className="header-message">
        <h4>Message</h4>
      </div>
      <div className="message-area">
        <div className="incoming message">
          <h4>User1</h4>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="outgoing message">
          <h4>User2</h4>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="incoming message">
          <h4>User1</h4>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="outgoing message">
          <h4>User2</h4>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </div>
      <div className="message-textarea">
        <textarea name="" id="" placeholder="Enter your message"></textarea>
      </div>
    </div>
  );
};

export default Message;
