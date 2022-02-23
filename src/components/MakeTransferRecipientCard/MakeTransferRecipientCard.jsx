import React from 'react'
import "./MakeTransferChooseRecipientCard.scss";

const MakeTransferRecipientCard = (props) => {

  const { userCard } = props;

  return (
    <div className="transfer-page__recipient__card">
      <img src={userCard.bankImage} alt={userCard.bankName}></img>
      <p>{userCard.personName}</p>
      <p>{userCard.sortCode}</p>
      <p>{userCard.accountNumber}</p>
    </div>
  )
}

export default MakeTransferRecipientCard