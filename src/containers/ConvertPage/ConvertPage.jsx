import React from 'react'
import "./ConvertPage.scss";
import Header from '../../components/Header/Header'
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';
import LiveRates from "../LiveRates/LiveRates";
import Wallet from '../../components/Wallet/Wallet';
import MobileNotFound from "./../../components/MobileNotFound/MobileNotFound";

const ConvertPage = (props) => {

  const {profileData, userHoldings, getUserData} = props;
  
  return (
    <>
    <section className='convert-page'>
      <Header title="Convert" pageFunctionHeading="Currency Converter" textDescription="Buy and exchange currencies with ease." /> 
      {(!userHoldings || !profileData) && <h3 className="withdraw-loading">Loading...</h3>}
      <div className="tiles">
      {userHoldings && <Wallet userHoldings={userHoldings} />}
      </div>
      {userHoldings && profileData && (
      <CurrencyConverter profileData={profileData} userHoldings={userHoldings}  getUserData={getUserData} />
      )}
      <Header
        title="Live Rates"
        pageFunctionHeading="View Live Rates"
        textDescription="See currency rates with your chosen currency in real time."
      />
      <section className="live-rates">
        <LiveRates />
      </section>
    </section>
    <MobileNotFound />
    </>
  );
};

export default ConvertPage;
