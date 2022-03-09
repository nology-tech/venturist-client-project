import React from 'react';
import "./MakeTransferChooseCurrency.scss";
import MakeTransferCurrencyCard from '../MakeTransferCurrencyCard/MakeTransferCurrencyCard';
import MakeTransferCard from '../MakeTransferCard/MakeTransferCard';

import { library } from '@fortawesome/fontawesome-svg-core';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';
import * as IconsRegular from '@fortawesome/free-regular-svg-icons';
import icons from "../../../assets/icons/icons";
import cross from "./../../../assets/icons/black-cross.png"

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

const MakeTransferChooseCurrency = (props) => {

  const {currencyData, handleCurrency, handleSearch, handleShowCurrencyModal} = props;

  const currencyCardComponents = currencyData.map((currency,index) => <MakeTransferCard key={index} cardContent={currency} type="currency" handleEvent={handleCurrency} />)

  return (
    <>
    <div className="transfer-page__choose-currency" data-testid="choose-currency">
      <h2 className="transfer-page__choose-currency__header">Choose Currency</h2>
      <img src={cross} alt="Close menu" className="transfer-page__choose-currency__close-menu" onClick={handleShowCurrencyModal}/>
      <h4 className="transfer-page__choose-currency__subheader">Search</h4>
      {icons.Search}
      <input type="text" placeholder="Search..." className="transfer-page__choose-currency__search" onChange={handleSearch} />

      <div className="transfer-page__choose-currency__currency-list">
        <div className="transfer-page__choose-currency__currency-list__headers">
          <h5>Currency</h5>
          <h5 className="transfer-page__choose-currency__currency-list__headers__rate">Rate</h5>
        </div>
        <div className="transfer-page__choose-currency__currency-list__cards">
          {currencyCardComponents}
        </div>
      </div>
    </div>
    <div className="overlay-background"></div>
    </>
  )
}

export default MakeTransferChooseCurrency