import React from "react";
import "./Footer.scss";
import logo from "../../../assets/logos/logo.png";
import Button from "../../Button/Button";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} alt="Venturist" className="image" />
        <h2>Venturist</h2>
      </div>
      <Button buttonName="Sign up" />
    </div>
  );
};

export default Footer;
