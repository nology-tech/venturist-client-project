import React, {useState} from 'react';
import "./MakeTransferConfirmAccount.scss";
import MakeTransferChooseRecipient from '../MakeTransferChooseRecipient/MakeTransferChooseRecipient';
import Button from "../../Button/Button";

const MakeTransferConfirmAccount = (props) => {

  const {profileData, data, transferAmount, handleAddRecipient} = props;

  const [showChooseRecipients, setShowChooseRecipients] = useState(false);
  
  const toggleChooseRecipients = () => {
    setShowChooseRecipients(!showChooseRecipients);
  };

  return (
    <div className="transfer-page__confirm">
      <div className='transfer-page__confirm__sendContainer' data-testid="confirmSendContainer">

        <h2 className='transfer-page__confirm__sendContainer__header'>Send From</h2>
        <div  className='transfer-page__confirm__sendContainer__details'>
          <h6 className='transfer-page__confirm__sendContainer__details__name'>{profileData.firstName} {profileData.lastName}</h6>
          <div className='transfer-page__confirm__sendContainer__details__text'><p >Account Number:</p> <p>{profileData.accountNumber}</p> </div>            
          <div className='transfer-page__confirm__sendContainer__details__text' ><p>Sort Code: </p> <p>{profileData.sortCode}</p> </div>
          <div className='transfer-page__confirm__sendContainer__details__total' > <h6 >Total </h6> <p data-testid="transferAmount">{transferAmount}</p></div>          
          <div className='transfer-page__confirm__sendContainer__details__funds'> <p>Funds Remaining: </p> <p data-testid="remainingBalance">£{(profileData.holdings.GBP - transferAmount).toFixed(2)}</p></div>
          
        </div>

        <h2 className='transfer-page__confirm__sendContainer__header'>To</h2>

        <div className="transfer-page__confirm__sendContainer__button">
        <Button  buttonName="Select Recipient" buttonFunction={toggleChooseRecipients} />
        <h1 className="transfer-page__confirm__sendContainer__divider">|</h1>
        <Button  buttonName="+ Pay Someone New" buttonStyle="clear" buttonFunction={handleAddRecipient} />
        </div>
      </div>

        {showChooseRecipients && <MakeTransferChooseRecipient userCardList = {data} toggleChooseRecipients={toggleChooseRecipients} handleSearch={()=>alert("Search")} />}

    </div>
  )
}

export default MakeTransferConfirmAccount