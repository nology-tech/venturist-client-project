import React from 'react'
import "./MakeTransferRecipientCard.scss";

const MakeTransferRecipientCard = (props) => {

  const { userCard } = props;

  let personName;

  if(userCard.middleNames) {
    personName = userCard.firstName + " " + userCard.middleNames + " " + userCard.lastName;
  } else {
    personName = userCard.firstName + " " + userCard.lastName;
  }

  return (
    <div className="transfer-page__recipient__card">
      <div className="transfer-page__recipient__card--left">
        <img src={userCard.bankIcon} alt={userCard.bankName} className="transfer-page__recipient__card__bank-image"></img>
        <p>{personName}</p>
      </div>
      <div className="transfer-page__recipient__card--right">
        <p className="transfer-page__recipient__card__sort-code">{userCard.sortCode}</p>
        <p className="transfer-page__recipient__card__account-number">{userCard.accountNumber}</p>
      </div>      
    </div>
  )
}

export default MakeTransferRecipientCard