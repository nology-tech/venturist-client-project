import React from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "./404Page.scss";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <div className="errorPage__box">
        <img
          className="errorPage__img"
          src={require("../../assets/icons/404error.gif")}
          alt="404 error"
        />
        <h1>404</h1>
        <h2>Page not found</h2>
        <p className="errorPage__text">
          The page you're looking for doesn't exist or an error occorred. Go
          back to Home to choose another direction.
        </p>

        <Link to="/">
          <Button buttonName="Back to Home" />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
