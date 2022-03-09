import React from 'react'
import "./MakeTransferRecipientCard.scss";

const MakeTransferRecipientCard = (props) => {

  const { user, handleChooseRecipient } = props;

  let personName;

  if(user.middleNames) {
    personName = user.firstName + " " + user.middleNames + " " + user.lastName;
  } else {
    personName = user.firstName + " " + user.lastName;
  }

  return (
    <div className="transfer-page__recipient__card" data-testid={"recipient-card"} onClick={handleChooseRecipient}>
      <div className="transfer-page__recipient__card--left">
        <img src={user.bankIcon} alt={user.bankName} className="transfer-page__recipient__card__bank-image"></img>
        <p>{personName}</p>
      </div>
      <div className="transfer-page__recipient__card--right">
        <p className="transfer-page__recipient__card__sort-code">{user.sortCode}</p>
        <p className="transfer-page__recipient__card__account-number">{user.accountNumber}</p>
      </div>      
    </div>
  )
}

export default MakeTransferRecipientCard