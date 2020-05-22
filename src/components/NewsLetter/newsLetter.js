import React from "react";
import "./newsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsLetter_root">
      <p>подписаться на новости</p>
      <form className="newsLetter_form">
        <input placeholder="messege..." />
        <button>Oтправлять</button>
      </form>
    </div>
  );
};

export default NewsLetter;
