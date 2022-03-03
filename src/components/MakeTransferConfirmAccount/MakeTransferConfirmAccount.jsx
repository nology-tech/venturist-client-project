import React, {useState} from 'react';
import "./MakeTransferConfirmAccount.scss";
import MakeTransferChooseRecipient from '../MakeTransferChooseRecipient/MakeTransferChooseRecipient';
import Button from "./../Button/Button";

const MakeTransferConfirmAccount = (props) => {

  const {profileData, data, exchangeInfo} = props;

  const [showChooseRecipients, setShowChooseRecipients] = useState(false);
  
  const toggleChooseRecipients = () => {
    setShowChooseRecipients(!showChooseRecipients);
  };

  return (
    <div className="transfer-page__confirm">
      <div className='transfer-page__confirm__sendContainer'>

        <h2 className='transfer-page__confirm__sendContainer__header'>Send From</h2>
        <div  className='transfer-page__confirm__sendContainer__details'>
          <h6 className='transfer-page__confirm__sendContainer__details__name'>{profileData.firstName} {profileData.lastName}</h6>
          <p className='transfer-page__confirm__sendContainer__details__text'>Account Number: {profileData.accountNumber}</p>
          <p className='transfer-page__confirm__sendContainer__details__text' >Sort Code:  {profileData.sortCode}</p>

          <h6 className='transfer-page__confirm__sendContainer__details__total'>Total {profileData.holdings.GBP}</h6>
          <p className='transfer-page__confirm__sendContainer__details__funds'>Funds Remaining: £14,210.00 </p>
        </div>

        <h2 className='transfer-page__confirm__sendContainer__header'>To</h2>

        <div className="transfer-page__confirm__sendContainer__button">
        <Button  buttonName="Select Recipient" buttonFunction={toggleChooseRecipients} />
        <h1 className="transfer-page__confirm__sendContainer__divider">|</h1>
        <Button  buttonName="+ Pay Someone New" buttonStyle="clear" buttonFunction={() => {}} />
        </div>
      </div>

        {showChooseRecipients && <MakeTransferChooseRecipient userCardList = {data} toggleChooseRecipients={toggleChooseRecipients}  />}

    </div>
  )
}

export default MakeTransferConfirmAccount