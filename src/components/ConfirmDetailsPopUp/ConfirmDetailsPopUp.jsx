import React from "react";
import Button from "../Button/Button";
import iconCross from "../../assets/icons/black-cross.png";
import "./ConfirmDetailsPopUp.scss";
import { Link } from "react-router-dom";

const ConfirmDetailsPopUp = (props) => {
  const {
    firstName,
    lastName,
    accountNumber,
    sortCode,
    accountType,
    totalAmount,
  } = props;
  const { toggleConfirm, toggleSuccess } = props;

  return (
    <div className="confirm-popup">
      <div className="popup-background"></div>
      <div className="confirm-popup">
        <div className="confirm-popup__content">
          <Link to="/Wallet" className="confirm-popup__icon">
            <img src={iconCross} alt="Go back" />
          </Link>
          <p className="confirm-popup__content__title">Confirm Details</p>
          <div className="confirm-popup__content__user-name">
            <p id="header" className="account-details">
              Recipient Name
            </p>
            <p className="user-info">
              {firstName} {lastName}
            </p>
          </div>
          <div className="confirm-popup__content__account-type">
            <p id="header" className="account-details">
              Account Type
            </p>
            <p className="user-info">{accountType}</p>
          </div>
          <div className="confirm-popup__content__account-number">
            <p id="header" className="account-details">
              Account Number
            </p>
            <p className="user-info">{accountNumber}</p>
          </div>
          <div className="confirm-popup__content__sort-code">
            <p id="header" className="account-details">
              Sort Code
            </p>
            <p className="user-info">{sortCode}</p>
          </div>
          <div className="confirm-popup__content__total-amount">
            <p id="header" className="account-details">
              Total Amount
            </p>
            <p className="user-info">{totalAmount}</p>
          </div>
        </div>
        <p className="border"></p>
        <div className="button-container">
          <Button
            buttonName="Go Back"
            buttonStyle="clear"
            buttonFunction={toggleConfirm}
          />
          <Button buttonName="Confirm" buttonFunction={toggleSuccess} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmDetailsPopUp;
