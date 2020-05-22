import React from "react";
import "./features.css";

import Feature from "./feature";

const Features = ({ data }) => {
  return (
    <div>
      <p className="ft-title">О нас</p>
      <div className="features">
        {data.map(({ id, image, title, text }) => (
          <Feature key={id} image={image} title={title} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Features;
