import React from "react";
import "./menuTree.css";

import Branch from "./branch";
import Leaf from "./leaf";

const MenuTree = ({ data, position }) => {
  return (
    <ul className={`menuTree_${position}`}>
      {data.map((item, index) => (
        <>
          {item.hasChildren === true ? (
            <Branch item={item} key={index} />
          ) : (
            <Leaf item={item} />
          )}
        </>
      ))}
    </ul>
  );
};

export default MenuTree;
