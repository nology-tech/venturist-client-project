import React from 'react';
import MakeTransferRecipientCard from '../MakeTransferRecipientCard/MakeTransferRecipientCard';
import "./MakeTransferChooseRecipient.scss";

import { library } from '@fortawesome/fontawesome-svg-core';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';
import * as IconsRegular from '@fortawesome/free-regular-svg-icons';
import icons from "./../../assets/icons/icons";
import cross from "./../../assets/icons/black-cross.png"

const iconListSolid = Object
  .keys(IconsSolid)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => IconsSolid[icon])

library.add(...iconListSolid)
const iconListRegular = Object
  .keys(IconsRegular)
  .filter(key => key !== "far" && key !== "prefix" )
  .map(icon => IconsRegular[icon])

library.add(...iconListRegular)

const MakeTransferChooseRecipient = (props) => {

  const {userCardList} = props;

  const userCardListUsed = (userCardList.length !== 0);
  
  const userCardComponents = userCardList.map((userCard,index) => <MakeTransferRecipientCard key={index} userCard={userCard} />);

  const emptyContactListText = <p className="transfer-page__choose-recipient__recipient-list__empty">You don't seem to have any contacts yet, try adding one!</p>;

  return (
    <>
    <div className="transfer-page__choose-recipient">
      <h2 className="transfer-page__choose-recipient__header">Choose Recipient</h2>
      <img src={cross} alt="Close menu" className="transfer-page__choose-recipient__close-menu" onClick={()=>alert("clicked")}/>
      <h4 className="transfer-page__choose-recipient__subheader">Search</h4>
      {icons.Search}
      <input type="text" placeholder="Search..." className="transfer-page__choose-recipient__search" onChange={()=>alert("clicked")}/>

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
    <div className='transfer-page__choose-recipient__overlay'> </div>
    </>
  )
}

export default MakeTransferChooseRecipient