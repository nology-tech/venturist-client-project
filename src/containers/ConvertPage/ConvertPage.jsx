import React, {useState, useEffect} from 'react'
import "./ConvertPage.scss";
import userProfile from "../../assets/data/samanthaBrooksProfile";
import liveRatesArr from "../../assets/data/liveRatesExample";
import Header from '../../components/Header/Header'
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';




const ConvertPage = () => {

  const [userData,setUserData] = useState({...userProfile});

  const handleConversion = (fromAmount, toAmount, from, to ) => {
    const temp = {...userData};
    temp.holdings[from] -= fromAmount;
    if(!Object.keys(temp.holdings).includes(to)){
      temp.holdings[to]= toAmount;
    } else {
      temp.holdings[to] += toAmount;
    } 
    setUserData(temp)
  }

  const [test,setTest] = useState([])
  useEffect(() => {
    const temp = Object.keys(userData.holdings).map((key, index) => <p key={index}>{key}: {userData.holdings[key]}</p>);
    setTest(temp)
  }, [userData])
  
  return (

    <section className='convert-page'>
      <Header title="Convert" pageFunctionHeading="Currency Converter" textDescription="Buy and exchange currencies with ease" />
      {test}
      <CurrencyConverter userProfile={userData} liveRates={liveRatesArr} handleConversion={handleConversion} />
    </section>
  )
}

export default ConvertPage;