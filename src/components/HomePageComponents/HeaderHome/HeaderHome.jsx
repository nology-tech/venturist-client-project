import React from "react";
import "./HeaderHome.scss";
import logo from "../../../assets/logos/logo.png";
import LinkItem from "../LinkItem/LinkItem";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

const HeaderHome = (props) => {
  const { setShowHome } = props;
  const links = ["Home", "Features", "About", "Contact Us"];
  const handleToggle = () => {
    setShowHome(false);
  };

  return (
    <header className="headerHome">
      <div className="headerHome__logo">
        <img src={logo} alt="Venturist" />
        <h2>Venturist</h2>
      </div>
      <div className="headerHome__links">
        {links.map((link, index) => {
          return <LinkItem key={index} link={link} />;
        })}
      </div>
      <div className="headerHome__buttons">
        <a href="#">Sign in</a>
        <Link to="/Wallet" onClick={handleToggle}>
          <Button buttonName="Sign up" />
        </Link>
      </div>
    </header>
  );
};

export default HeaderHome;
