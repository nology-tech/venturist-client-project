import React from 'react';
import MakeTransferRecipientCard from '../MakeTransferRecipientCard/MakeTransferRecipientCard';
import "./MakeTransferChooseRecipient.scss";

const MakeTransferChooseRecipient = (props) => {

  const {userCardList} = props;

  let userCardListUsed = (userCardList.length !== 0);
  
  const userCardComponents = userCardList.map((userCard,index) => <MakeTransferRecipientCard key={index} userCard={userCard} />);

  const emptyContactListText = <p>You don't seem to have any contacts yet, try adding one!</p>;

  return (
    <div className="transfer-page__choose-recipient">
      <h2>Choose Recipient</h2>
      <img src="close-cross" alt="Close menu" />
      <h4>Search</h4>
      <img src="magnifying glass" alt="Search" />
      <input type="text" placeholder="Search..."/>

      <div className="transfer-page__choose-recipient__recipient-list">
        <div className="transfer-page__choose-recipient__recipient-list__headers">
          <h5>Name</h5>
          <h5 className="transfer-page__choose-recipient__recipient-list__headers__sort-code">Sort Code</h5>
          <h5 className="transfer-page__choose-recipient__recipient-list__headers__account-no">Account No</h5>
        </div>
        <div className="transfer-page__choose-recipient__recipient-list__cards">
          {!userCardListUsed && emptyContactListText}
          {userCardListUsed && userCardComponents}
        </div>
      </div>
    </div>
  )
}

export default MakeTransferChooseRecipient