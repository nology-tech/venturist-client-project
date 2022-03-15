import React from "react";
import "./HeaderHome.scss";
import logo from "../../../assets/logos/logo.png";
import LinkItem from "../LinkItem/LinkItem";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

const HeaderHome = () => {
  return (
    <header className="headerHome">
      <div className="headerHome__logo">
        <img src={logo} alt="Venturist" />
        <h2>Venturist</h2>
      </div>
      <div className="headerHome__buttons">
        <a href="https://github.com/nology-tech/venturist-client-project">
          Sign in
        </a>
        <Link to="/wallet">
          <Button buttonName="Sign up" />
        </Link>
      </div>
    </header>
  );
};

export default HeaderHome;
