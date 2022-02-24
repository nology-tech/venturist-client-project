import React from 'react'
import "./MakeTransferRecipientCard.scss";

const MakeTransferRecipientCard = (props) => {

  // const { userCard } = props;

  return (
    <div className="transfer-page__recipient__card">
      <div className="transfer-page__recipient__card--left">
        <p className="bank-image">image</p>
        <p>name</p>
      </div>
      <div className="transfer-page__recipient__card--right">
        <p className="sort-code">sortCode</p>
        <p className="account-number">accountNumber</p>
      </div>

      {/* <img src={userCard.bankImage} alt={userCard.bankName} className="bank-image"></img>
      <p>{userCard.personName}</p>
      <p>{userCard.sortCode}</p>
      <p>{userCard.accountNumber}</p> */}
    </div>
  )
}

export default MakeTransferRecipientCard