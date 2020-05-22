import React from "react";
import "./search.css";

import search from "./images/search_icon.png";

const SearchForm = () => {
  return (
    <form className="search_root">
      <input placeholder="search..." className="search_input" />
      <img src={search} alt="searchIcon" className="search_icon" />
    </form>
  );
};

export default SearchForm;
