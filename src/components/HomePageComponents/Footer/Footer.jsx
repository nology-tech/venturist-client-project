import React from "react";
import "./Footer.scss";
import logo from "../../../assets/logos/logo.png";
import Button from "../../Button/Button";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> 31a0eb8d968f7a7a74ce94b41b2f96eefbb3a3e6

const Footer = () => {
  return (
    <div className="footer" data-testid="footer">
      <div className="footer__logo">
        <img src={logo} alt="Venturist" className="image" />
        <h2>Venturist</h2>
      </div>
<<<<<<< HEAD
      <Button buttonName="Sign up" />
=======
      <Link to="/wallet">
        <Button buttonName="Sign up" />
      </Link>
>>>>>>> 31a0eb8d968f7a7a74ce94b41b2f96eefbb3a3e6
    </div>
  );
};

export default Footer;
