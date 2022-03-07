import React from 'react'
import "./ConvertPage.scss";
import userProfile from "../../assets/data/samanthaBrooksProfile";
import liveRatesArr from "../../assets/data/liveRatesExample";
import Header from '../../components/Header/Header'
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';




const ConvertPage = () => {
  
  return (
    <section className='convert-page'>
      <Header title="Convert" pageFunctionHeading="Currency Converter" textDescription="Buy and exchange currencies with ease" />

      <CurrencyConverter userProfile={userProfile} liveRates={liveRatesArr} />
    </section>
  )
}

export default ConvertPage;