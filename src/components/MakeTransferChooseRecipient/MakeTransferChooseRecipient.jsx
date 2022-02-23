import React from 'react';
import "./MakeTransferChooseRecipient.scss";

const MakeTransferChooseRecipient = (props) => {

  const {userCardList} = props;

  const userCardComponents = userCardList.map(userCard => <MakeTransferChooseRecipientCard userCard={userCard} />)

  return (
    <div className="transfer-page__choose-recipient">
      <h2>Choose Recipient</h2>
      <img src="close-cross" />
      <p>Search</p>
      <img src="magnifying glass" alt="Search" />
      <input type="text" placeholder="Search..."/>

      <div className="transfer-page__recipient-list">
        <p>Name</p>
        <p>Sort Code</p>
        <p>Account No</p>
        {userCardComponents}
      </div>
    </div>
  )
}

export default MakeTransferChooseRecipient