import React from 'react'
import "./MakeTransferPage.scss"
import { useState } from "react"
import Button from '../Button/Button'
import MakeTransferChooseRecipient from "../MakeTransferChooseRecipient/MakeTransferChooseRecipient"
import Data from "../../assets/data/samanthaBrooksProfile";

const MakeTransferPage = (props) => {

  // const {customerName, accountNumber, accountSortCode, accountBalance} = props;
  const [showChooseRecipients, setShowChooseRecipients] = useState(false);
  const toggleChooseRecipients = () => {
    setShowChooseRecipients(!showChooseRecipients);
  };

  return (
    <div className='make-transfer__page'>
        <h6 className='make-transfer__page__transfer'>Transfer</h6>
        <h1>Make Transfer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis. Integer amet, donec massa fermentum nunc eget netus.</p>

        <div className='make-transfer__page__sendContainer'>

          <h2 className='make-transfer__page__sendContainer__header'>Send From</h2>
          <div  className='make-transfer__page__sendContainer__details'>
            <h6 className='make-transfer__page__sendContainer__details__name'>{Data.firstName} {Data.lastName}</h6>
            <p className='make-transfer__page__sendContainer__details__text'>Account Number: {Data.accountNumber}</p>
            <p className='make-transfer__page__sendContainer__details__text' >Sort Code:  {Data.sortCode}</p>

            <h6 className='make-transfer__page__sendContainer__details__total'>Total {Data.holdings.GBP}</h6>
            <p className='make-transfer__page__sendContainer__details__funds'>Funds Remaining: £14,210.00 </p>
          </div>

          <h2 className='make-transfer__page__sendContainer__header'>To</h2>

          <div className="make-transfer__page__sendContainer__button">
          <Button  buttonName="Select Recipient" buttonFunction={toggleChooseRecipients} />
          <h1 className="make-transfer__page__sendContainer__divider">|</h1>
          <Button  buttonName="+ Pay Someone New" buttonStyle="clear" buttonFunction={() => {}} />
          </div>
          
        </div>
        
        {showChooseRecipients && <MakeTransferChooseRecipient userCardList = {Data} toggleChooseRecipients={toggleChooseRecipients}  />}
        
    </div>

  )
}

export default MakeTransferPage