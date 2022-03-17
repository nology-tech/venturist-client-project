import React from "react";
import "./Footer.scss";
import logo from "../../../assets/logos/logo.png";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" data-testid="footer">
      <div className="footer__logo">
        <img src={logo} alt="Venturist" className="image" />
        <h2>Venturist</h2>
      </div>
      <Link to="/wallet">
        <Button buttonName="Sign up" />
      </Link>
    </div>
  );
};

export default Footer;
