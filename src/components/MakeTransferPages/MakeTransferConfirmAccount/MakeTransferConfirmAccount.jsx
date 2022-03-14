import React, {useState} from 'react';
import "./MakeTransferConfirmAccount.scss";
import MakeTransferChooseModal from '../MakeTransferChooseModal/MakeTransferChooseModal';
import Button from "../../Button/Button";

const MakeTransferConfirmAccount = (props) => {

  const { data, handleAddRecipient, exchangeInfo, setExchangeInfo, handleShowConfirmation } = props;

  const [showChooseRecipients, setShowChooseRecipients] = useState(false);
  
  const toggleChooseRecipients = () => {
    setShowChooseRecipients(!showChooseRecipients);
  };

  const handleChooseRecipient = (event) => {
    const user = data.filter(contact => contact.IBAN === event.target.id)[0];
    setExchangeInfo({...exchangeInfo}, exchangeInfo.exchangeTo.user = user);
    toggleChooseRecipients();
    handleShowConfirmation();
  }
  
  const currencySymbol = exchangeInfo.exchangeFrom.currency.currencySymbol;
  const currencyCode = exchangeInfo.exchangeFrom.currency.currencyCode;
  const profileData = exchangeInfo.exchangeFrom.user;
  const transferAmount = exchangeInfo.exchangeFrom.amount;

  return (
    <div className="transfer-page__confirm">
      <div className='transfer-page__confirm__sendContainer' data-testid="confirmSendContainer">

        <h2 className='transfer-page__confirm__sendContainer__header'>Send From</h2>
        <div className='transfer-page__confirm__sendContainer__details'>
          <h6 className='transfer-page__confirm__sendContainer__details__name'>{profileData.firstName} {profileData.lastName}</h6>
          <div className='transfer-page__confirm__sendContainer__details__text'><p>Account Number:</p> <p>{profileData.accountNumber} </p> </div>            
          <div className='transfer-page__confirm__sendContainer__details__text' ><p>Sort Code: </p> <p>{profileData.sortCode}</p> </div>
          <div className='transfer-page__confirm__sendContainer__details__total' > <h5>Total </h5> <p data-testid="transferAmount">{currencySymbol}{Number(transferAmount).toFixed(2)}</p></div>          
          <div className='transfer-page__confirm__sendContainer__details__funds'> <p>Funds Remaining: </p> <p data-testid="remainingBalance">{currencySymbol}{(Number(profileData.holdings[currencyCode]) - transferAmount).toFixed(2)}</p></div>
          
        </div>

        <h2 className='transfer-page__confirm__sendContainer__header'>To</h2>

        <div className="transfer-page__confirm__sendContainer__button">
        <Button  buttonName="Select Recipient" buttonFunction={toggleChooseRecipients} />
        <div className="transfer-page__confirm__sendContainer__divider"> </div>
        <Button  buttonName="+ Pay Someone New" buttonStyle="clear" buttonFunction={handleAddRecipient} />
        </div>
      </div>

        {showChooseRecipients && <MakeTransferChooseModal type="Recipient" content = {data} handleShowModal={toggleChooseRecipients} handleSearch={()=>alert("Search")} handleEvent={handleChooseRecipient}/>}

    </div>
  )
}

export default MakeTransferConfirmAccount