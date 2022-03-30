import React from 'react'
import "./ConvertPage.scss";
import Header from '../../components/Header/Header'
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';
import LiveRates from "../LiveRates/LiveRates";
import Wallet from '../../components/Wallet/Wallet';
import MobileNotFound from "./../../components/MobileNotFound/MobileNotFound";

const ConvertPage = (props) => {

  const {liveRateData, profileData, userHoldings, updateProfileData} = props;

  const handleConversion = (fromAmount, toAmount, from, to ) => {
    // // const temp = {...profileData};
    // temp.holdings[from] -= fromAmount;
    // if(!Object.keys(temp.holdings).includes(to)){
    //   temp.holdings[to]= toAmount;
    // } else {
    //   temp.holdings[to] += toAmount;
    // } 
    const ownedCurrencies = userHoldings.map(holding => holding.currencyCode);

    const temp = [...userHoldings].map(holding => {
      if (holding.currencyCode == from) {
        holding.amount -= fromAmount;
      }
      if (holding.currencyCode == to) {
        holding.amount += toAmount;
      }
      return holding;
    });
    if (!ownedCurrencies.includes(to)) {
      temp.push({
        currencyName: "",
        currencyCode: to,
        amount: toAmount,
        currencySymbol: ""
      });
    }
    updateProfileData(temp);
  }
  
  return (
    <>
    <section className='convert-page'>
      <Header title="Convert" pageFunctionHeading="Currency Converter" textDescription="Buy and exchange currencies with ease." /> 
      <div className="tiles">
      {userHoldings && <Wallet userHoldings={userHoldings} />}
      </div>
      <CurrencyConverter profileData={profileData} userHoldings={userHoldings} liveRateData={liveRateData} handleConversion={handleConversion} />
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
