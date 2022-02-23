import React from 'react';
import "./MakeTransferConfirm.scss";

const MakeTransferConfirm = (props) => {

  const { accountDetails, transferAmount } = props;

  return (
    <div className="transfer-page__confirm">
      <h3>Send From</h3>
      <div className="grey-background">
        <h5 className="blue-colouring">Samantha Brooks</h5>
        <div className="account-details">
          <p>Account Number:</p>
          <p>{accountDetails.accountNumber}</p>
          <p>Sort Code:</p>
          <p>{accountDetails.sortCode}</p>
        </div>
        <div className="total">
          <h5>Total</h5>
          <h5>{transferAmount}</h5>
          <p>Funds Remaining:</p>
          <p>{accountDetails.balance}</p>
        </div>
      </div>
      <h3>To</h3>
      <div className="transfer-page__confirm__recipient">
        <button className="blue-background">Select Recipient</button>
        <button className="white-background">+ Pay Someone New</button>
      </div>
    </div>
  )
}

export default MakeTransferConfirm