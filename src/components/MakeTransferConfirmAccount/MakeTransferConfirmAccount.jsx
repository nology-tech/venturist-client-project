import React from 'react';
import "./MakeTransferConfirmAccount.scss";

const MakeTransferConfirmAccount = (props) => {

  // const { accountDetails, transferAmount } = props;
  const {transferAmount} = props;

  return (
    <div className="transfer-page__confirm grey-background">
      <h3>Send From</h3>
      <div className="dark-grey-background account-details-full">
        <h5 className="blue-colouring">Samantha Brooks</h5>
        <div className="account-details">
          <div className="account-number split-between">
            <p>Account Number:</p>
            {/* <p>{accountDetails.accountNumber}</p> */}
            <p>10840366</p>
          </div>
          <div className="sort-code split-between">
            <p>Sort Code:</p>
            <p>110053</p>
            {/* <p>{accountDetails.sortCode}</p> */}
          </div>
        </div>
        <div className="total">
          <div className="split-between">
            <h5>Total</h5>
            <h5>{transferAmount}</h5>
          </div>
          <div className="balance split-between">
            <p className="sub-text">Funds Remaining:</p>
            {/* <p>{accountDetails.balance}</p> */}
            <p>100</p>
          </div>
        </div>
      </div>
      <h3>To</h3>
      <div className="transfer-page__confirm__recipient">
        <div className="middle-divider">
          <button className="blue-background">Select Recipient</button>
        </div>
        <button className="white-background">+ Pay Someone New</button>
      </div>
    </div>
  )
}

export default MakeTransferConfirmAccount