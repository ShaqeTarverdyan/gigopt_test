import React, { useState } from "react";
import MenuTree from "./menuTree";
import "./branch.css";

const Branch = ({ item }) => {
  const { style } = item;
  const { background } = style;

  const [isOpenBranch, setIsOpenBranch] = useState(false);
  const toggleBranch = () => {
    setIsOpenBranch(!isOpenBranch);
  };
  return (
    <li style={{ background: background }}>
      {isOpenBranch && (
        <MenuTree data={item.children} position={item.position} />
      )}
      <span onClick={toggleBranch}>{item.name}</span>
    </li>
  );
};

export default Branch;
