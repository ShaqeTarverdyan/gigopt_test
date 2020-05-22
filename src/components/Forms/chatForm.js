import React from "react";
import "./chatForm.css";

const ChatForm = ({ hover }) => {
  const chatFormStyle = hover ? "chatForm_rootOpen" : "chatForm_root";
  return (
    <div className={chatFormStyle}>
      <div className="contuctTitle">Contuct Us</div>
      <form className="chat_Form">
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message..." rows="10" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ChatForm;
