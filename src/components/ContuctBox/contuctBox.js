import React, { useState } from "react";
import "./contuctBox.css";

//import static images
import chat_icon from "../../staticImages/other/chat_icon.png";
import clock_icon from "../../staticImages/other/clock_icon.png";
import phone_icon from "../../staticImages/other/phone_icon.png";
import search_icon from "../../staticImages/other/search_icon.png";

import ChatForm from "../Forms/chatForm";

const ContuctBox = () => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
  };
  return (
    <div className="contucts_root">
      <div className="contuctsIconWrapper">
        <div className="contuct_chat" onClick={toggleHover}>
          <img src={chat_icon} alt="chat" />
        </div>
        <div className="contuct_phone">
          <img src={clock_icon} alt="phone" />
        </div>
        <div className="contuct_clock">
          <img src={phone_icon} alt="clock" />
        </div>
        <div className="contuct_search">
          <img src={search_icon} alt="search" />
        </div>
      </div>
      <div className="chatForm">
        <ChatForm hover={hover} />
      </div>
    </div>
  );
};

export default ContuctBox;
