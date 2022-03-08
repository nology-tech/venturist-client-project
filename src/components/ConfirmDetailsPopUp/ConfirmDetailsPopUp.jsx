import React from "react";

import "./ConfirmDetailsPopUp.scss";

const ConfirmDetailsPopUp = (props) => {
  const {
    firstName,
    lastName,
    accountNumber,
    sortCode,
    accountType,
    totalAmount,
  } = props;
  const { toggleConfirm } = props;

  return (
    <div className="confirm-popup">
      <div className="confirm-popup__content">
        <p className="confirm-popup__content__title">Confirm Details</p>
        <p className="border"></p>
        <div className="confirm-popup__content__user-name">
          <p className="account-details">Recipient Name</p>
          <p className="user-info">
            {firstName}
            {lastName}
          </p>
        </div>
        <div className="confirm-popup__content__account-type">
          <p className="account-details">Account Type</p>
          <p className="user-info">{accountType}</p>
        </div>
        <div className="confirm-popup__content__account-number">
          <p className="account-details">Account Number</p>
          <p className="user-info">{accountNumber}</p>
        </div>
        <div className="confirm-popup__content__sort-code">
          <p className="account-details">Sort Code</p>
          <p className="user-info">{sortCode}</p>
        </div>
        <div className="confirm-popup__content__total-amount">
          <p className="account-details">Total Amount</p>
          <p className="user-info">{totalAmount}</p>
        </div>

        <p className="border"></p>
        <button onClick={toggleConfirm}>Go back</button>
        <button>Confirm</button>
      </div>
    </div>
  );
};

export default ConfirmDetailsPopUp;

//     <form id="confirmation">
{
  /* <h4>User</h4> */
}
{
  /* <h4>Account type</h4>
<h4>Account number</h4>
<h4>Sort code</h4>
<h4>Amount</h4>
</form> */
}
