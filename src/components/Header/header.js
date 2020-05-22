import React from "react";
import "./header.css";

//import static images
import logo from "./images/logo.png";
import viber from "./images/viber_icon.png";
import whatsup from "./images/whatsup_icon.png";
import phone from "./images/phone_icon.png";

//import necessary components
import SearchForm from "./search";
import Register from "./register";
import Login from "./login";

const HeaderComponent = () => {
  return (
    <div className="header_root">
      <section>
        <img src={logo} alt="logo" className="logo" />
      </section>
      <section>
        <div className="social">
          <img src={viber} alt="viber" />
          <img src={whatsup} alt="whatsup" />
          <div className="phoneWrapper">
            <img src={phone} alt="phone" />
            <div className="phone_number">
              <div>наш номер</div>
              <div>+ 77 555 2222</div>
            </div>
          </div>
        </div>
        <SearchForm />
        <Register />
        <Login />
      </section>
    </div>
  );
};

export default HeaderComponent;
