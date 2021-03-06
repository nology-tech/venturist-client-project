import React, { useState } from "react";
import "./MakeTransferConfirmAccount.scss";
import MakeTransferChooseModal from '../MakeTransferChooseModal/MakeTransferChooseModal';
import MakeTransferAddRecipient from "./../MakeTransferAddRecipient/MakeTransferAddRecipient";
import Button from "../../Button/Button";

const MakeTransferConfirmAccount = props => {
  const { data, exchangeInfo, setExchangeInfo, handleShowConfirmation } = props;

  const [showChooseRecipients, setShowChooseRecipients] = useState(false);
  const [showAddRecipient, setShowAddRecipient] = useState(false);
  const [searchedData, setSearchedData] = useState(data);

  const toggleChooseRecipients = () => {
    setShowChooseRecipients(!showChooseRecipients);
    setSearchedData(data);
  };

  const toggleAddRecipient = () => {
    setShowAddRecipient(!showAddRecipient);
  };

  const handleChooseRecipient = event => {
    const user = data.filter(contact => Number(contact.id) === Number(event.target.id))[0];
    setExchangeInfo({ ...exchangeInfo }, (exchangeInfo.exchangeTo.user = user));
    toggleChooseRecipients();
    handleShowConfirmation();
  };

  const handleInput = event => {
    setSearchedData(data.filter(person => {
      // let fullName;
      // if (person.middleNames) {
      //   fullName = person.firstName + " " + person.middleNames + " " + person.lastName;
      // } else {
      //   fullName = person.firstName + " " + person.lastName;
      // }
      return person.contactName.toLowerCase().includes(event.target.value.toLowerCase());
    }));
  };



  const currencySymbol = exchangeInfo.exchangeFrom.currency.currencySymbol;
  const profileData = exchangeInfo.exchangeFrom.user;
  const transferAmount = Number(exchangeInfo.exchangeFrom.amount) + Number(exchangeInfo.exchangeFrom.fee);
  const fundsRemaining = (Number(profileData.holdings.filter(curr => curr.currencyCode === exchangeInfo.exchangeFrom.currency.currencyCode)[0].amount) - transferAmount).toFixed(2);

  return (
    <div className="transfer-page__confirm">
      <div
        className="transfer-page__confirm__sendContainer"
        data-testid="confirmSendContainer"
      >
        <h2 className="transfer-page__confirm__sendContainer__header">Send From</h2>
        <div className="transfer-page__confirm__sendContainer__details">
          <h6 className="transfer-page__confirm__sendContainer__details__name">
            {profileData.firstName} {profileData.lastName}
          </h6>
          <div className="transfer-page__confirm__sendContainer__details__text">
            <p>Account Number:</p> <p>{profileData.bankAccountNo} </p>{" "}
          </div>
          <div className="transfer-page__confirm__sendContainer__details__text">
            <p>Sort Code: </p> <p>{profileData.sortCode}</p>{" "}
          </div>
          <div className="transfer-page__confirm__sendContainer__details__total">
            {" "}
            <h5>Total </h5>{" "}
            <p data-testid="transferAmount">
              {currencySymbol}
              {Number(transferAmount).toFixed(2)}
            </p>
          </div>
          <div className="transfer-page__confirm__sendContainer__details__funds">
            {" "}
            <p>Funds Remaining: </p>{" "}
            <p data-testid="remainingBalance">
              {currencySymbol}
              {fundsRemaining}
            </p>
          </div>
        </div>

        <h2 className="transfer-page__confirm__sendContainer__header">To</h2>

        <div className="transfer-page__confirm__sendContainer__button">
        <Button  buttonName="Select Recipient" buttonFunction={toggleChooseRecipients} />
        <div className="transfer-page__confirm__sendContainer__divider"> </div>
        <Button  buttonName="+ Pay Someone New" buttonStyle="clear" buttonFunction={toggleAddRecipient} />
        </div>
      </div>

        {showChooseRecipients && <MakeTransferChooseModal type="Recipient" content={searchedData} handleShowModal={toggleChooseRecipients} handleSearch={handleInput} handleEvent={handleChooseRecipient}/>}

        {showAddRecipient && <MakeTransferAddRecipient toggleAddRecipient={toggleAddRecipient} exchangeInfo={exchangeInfo} setExchangeInfo={setExchangeInfo} handleShowConfirmation={handleShowConfirmation} />}
    </div>
  );
};

export default MakeTransferConfirmAccount;
