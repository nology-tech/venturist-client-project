import React from "react";
import Button from "../Button/Button";
import iconCross from "../../assets/icons/black-cross.png";
import "./ConfirmDetailsPopUp.scss";

const ConfirmDetailsPopUp = (props) => {
  const {
    profileData,
    totalAmount,
    toggleConfirm, 
    toggleSuccess
  } = props;

  return (
    <div>
      <div className="confirm-popup-background"></div>
      <div className="confirm-popup" data-testid="confirm-popup">
        <div className="confirm-popup__content">
          <img
            className="confirm-popup__icon"
            src={iconCross}
            alt="Go back"
            onClick={toggleConfirm}
          />
          <p className="confirm-popup__content__title">Confirm Details</p>
          <div className="user-info">
            <p className="account-details">
              Recipient Name
            </p>
            <p className="confirm-popup__content__user-name">
              {profileData.firstName} {profileData.lastName}
            </p>
          </div>
          <div className="confirm-popup__content__account-type">
            <p className="account-details">
              Account Type
            </p>
            <p className="user-info">{profileData.cards[0].accountType}</p>
          </div>
          <div className="confirm-popup__content__account-number">
            <p className="account-details">
              Account Number
            </p>
            <p className="user-info">{profileData.accountNumber}</p>
          </div>
          <div className="confirm-popup__content__sort-code">
            <p className="account-details">
              Sort Code
            </p>
            <p className="user-info">{profileData.sortCode}</p>
          </div>
          <div className="confirm-popup__content__total-amount">
            <p className="account-details">
              Total Amount
            </p>
            <p className="user-info" data-testid="total-amount">{Number(totalAmount).toFixed(2).toLocaleString("en-us")}</p>
          </div>
        </div>
        <p className="confirm-popup__content__border-line"></p>
        <div className="confirm-popup__content__button-container">
          <Button
            data-testid="button"
            buttonName="Go Back"
            buttonStyle="clear"
            buttonFunction={toggleConfirm}
          />
          <Button 
            data-testid="button"
            buttonName="Confirm" 
            buttonFunction={toggleSuccess} 
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmDetailsPopUp;
