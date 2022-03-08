import React from "react";
import "./SuccessfulMessage.scss";
import iconCross from "../../assets/icons/black-cross.png";
import { Link, Router } from "react-router-dom";

const SuccessfulMessage = (props) => {
  const { message } = props;
  return (
    <>
      <div className="popup-background"></div>
      <div className="success" data-testid="success">
        <Link to="/Wallet" className="success__icon">
          <img src={iconCross} alt="Go back" />
        </Link>
        <p className="success__title">Completed</p>
        <span className="success__line-top"></span>
        <p className="success__message">{message}</p>
        <span className="success__line-bottom"></span>
      </div>
    </>
  );
};

export default SuccessfulMessage;
