import React from "react";
import "./Header.scss";
import logo from "../../../assets/logos/logo.png";
import LinkItem from "../LinkItem/LinkItem";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { setShowHome } = props;
  const links = ["Home", "Features", "About", "Contact Us"];
  const handleToggle = () => setShowHome(false);

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Venturist" />
        <h2>Venturist</h2>
      </div>
      <div className="header__links">
        {links.map((link, index) => {
          return <LinkItem key={index} link={link} />;
        })}
      </div>
      <div className="header__buttons">
        <a href="#">Sign in</a>
        <Link to="/Wallet">
          <Button buttonName="Sign up" onclick={handleToggle} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
