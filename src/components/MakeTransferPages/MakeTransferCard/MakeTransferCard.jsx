import React from 'react';
import "./MakeTransferCard.scss";
import CurrencyFlag from 'react-currency-flags';

const MakeTransferCard = (props) => {

  const { type, cardContent, handleEvent } = props;

  let leftContent;
  let rightContent;
  let overlayId;

  if(type==="Currency") {

    const leftImage = <CurrencyFlag currency={cardContent.currencyCode} width={40} className = "transfer-page__card__image" data-testid={"currency-flag"} key={1} />;
    const leftText = <p key={2}>{cardContent.currencyName}</p>;
    leftContent = [leftImage, leftText];
    rightContent = <p className="transfer-page__card__rate">{cardContent.liveRate.toFixed(4)}</p>
    overlayId = `transfer-page__card__${cardContent.currencyCode}`;

  } else if(type==="Recipient") {

    let personName = cardContent.firstName + " " + ((cardContent.middleNames) ? cardContent.middleNames + " " : "") + cardContent.lastName;

    const leftImage = <img src={cardContent.bankIcon} alt={cardContent.bankName} className="transfer-page__card__image" key={3}></img>;
    const leftText = <p key={4}>{personName}</p>;
    leftContent = [leftImage, leftText];
    rightContent = [<p className="transfer-page__card__sort-code" key={5} data-testid="sort-code">{cardContent.sortCode}</p>, 
    <p className="transfer-page__card__account-number" key={6}>{cardContent.accountNumber}</p>];
    overlayId = cardContent.accountNumber;
  }

  return (
    <div className="transfer-page__card">
      <div className="transfer-page__card--left">
        {leftContent}
      </div>
      <div className="transfer-page__card--right">
        {rightContent}
      </div>   
      <div className="transfer-page__card__overlay" onClick={handleEvent} id={overlayId} data-testid="overlay"></div>
    </div>
  )
}

export default MakeTransferCard