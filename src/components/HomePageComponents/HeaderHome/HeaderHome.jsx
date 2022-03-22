import React from "react";
import "./HeaderHome.scss";
import logo from "../../../assets/logos/logo.png";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

const HeaderHome = () => {
  return (
    <header className="headerHome" data-testid="headerHome">
      <div className="headerHome__logo">
        <img src={logo} alt="Venturist" />
        <h2>Venturist</h2>
      </div>
      <div className="headerHome__buttons">
        <Link to="/wallet">
          Sign in
        </Link>
        <Link to="/signup">
          <Button buttonName="Sign up" />
        </Link>
      </div>
    </header>
  );
};

export default HeaderHome;
