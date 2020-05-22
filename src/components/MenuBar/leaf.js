import React from "react";

const Leaf = ({ item }) => {
  const { style } = item;
  const { background } = style;
  return <li style={{ background: background }}>{item.name}</li>;
};

export default Leaf;
