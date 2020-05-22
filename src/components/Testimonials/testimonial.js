import React from "react";

const Testimonial = ({ image, name, text }) => {
  return (
    <div className="testimonial">
      <img src={image} className="tsImage" alt="tsImage" />
      <span className="tsDote" />
      <p className="tsText">{text}</p>
      <p className="tsName">{name}</p>
    </div>
  );
};

export default Testimonial;
