import React from "react";
import "./footer.css";
import NewsLetter from "../NewsLetter";

import logo from "../../staticImages/footer/logo_footer.png";

const Footer = ({ infoList, contuctUsData }) => {
  return (
    <div className="footer_wrapper">
      <div className="footer_content">
        <section>
          <img src={logo} alt="logo_footer" className="logo_footer" />
          <NewsLetter />
          <ul className="infoList">
            {infoList.map(({ id, name, url }) => (
              <li key={id}>
                <a href={url}>{name}</a>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <p className="footer_title">связь с нами</p>
          <ul className="contucts">
            {contuctUsData.map(({ id, icon, contuct }) => (
              <li key={id}>
                <img src={icon} alt="contuct_image" className="contuct_image" />
                <p>{contuct}</p>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <p className="footer_title"> конфиденциальность и политика</p>
          <p className="footer_configText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to
          </p>
        </section>
        <section>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </section>
      </div>
    </div>
  );
};

export default Footer;
