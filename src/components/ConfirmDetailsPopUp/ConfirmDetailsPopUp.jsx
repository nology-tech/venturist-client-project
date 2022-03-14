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
    <div className="confirm-popup" data-testid="confirm-popup">
      <div className="popup-background"></div>
      <div className="confirm-popup">
        <div className="confirm-popup__content">
          <img
            className="confirm-popup__icon"
            src={iconCross}
            alt="Go back"
            onClick={toggleConfirm}
          />
          <p className="confirm-popup__content__title">Confirm Details</p>
          <div className="confirm-popup__content__user-name">
            <p id="header" className="account-details">
              Recipient Name
            </p>
            <p className="user-info">
              {profileData.firstName} {profileData.lastName}
            </p>
          </div>
          <div className="confirm-popup__content__account-type">
            <p id="header" className="account-details">
              Account Type
            </p>
            <p className="user-info">{profileData.cards[0].accountType}</p>
          </div>
          <div className="confirm-popup__content__account-number">
            <p id="header" className="account-details">
              Account Number
            </p>
            <p className="user-info">{profileData.accountNumber}</p>
          </div>
          <div className="confirm-popup__content__sort-code">
            <p id="header" className="account-details">
              Sort Code
            </p>
            <p className="user-info">{profileData.sortCode}</p>
          </div>
          <div className="confirm-popup__content__total-amount">
            <p id="header" className="account-details">
              Total Amount
            </p>
            <p className="user-info" data-testid="total-amount">{totalAmount}</p>
          </div>
        </div>
        <p className="border"></p>
        <div className="button-container">
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
