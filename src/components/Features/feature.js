import React from "react";
import "./features.css";

const Feature = ({ id, image, title, text }) => {
  return (
    <div className="feature">
      <img src={image} alt={`image_${id}`} className="feature_image" />
      <p className="title">{title}</p>
      <p className="text">{text}</p>
    </div>
  );
};

export default Feature;
