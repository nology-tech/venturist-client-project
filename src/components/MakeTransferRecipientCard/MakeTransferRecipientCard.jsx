import React from 'react'
import "./MakeTransferRecipientCard.scss";

const MakeTransferRecipientCard = (props) => {

  // const { userCard } = props;

  return (
    <div className="transfer-page__recipient__card">
      <div className="transfer-page__recipient__card--left">
        <p className="transfer-page__recipient__card__bank-image">image</p>
        <p>name</p>
        {/* <img src={userCard.bankImage} alt={userCard.bankName} className="bank-image"></img>
        <p>{userCard.personName}</p> */}
      </div>
      <div className="transfer-page__recipient__card--right">
        <p className="transfer-page__recipient__card__sort-code">100154</p>
        <p className="transfer-page__recipient__card__account-number">27385019</p>
        {/* <p className="transfer-page__recipient__card__sort-code">{userCard.sortCode}</p>
        <p className="transfer-page__recipient__card__account-number">{userCard.accountNumber}</p> */}
      </div>      
    </div>
  )
}

export default MakeTransferRecipientCard