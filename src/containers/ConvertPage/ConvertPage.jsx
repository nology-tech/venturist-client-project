import React, {useState, useEffect} from 'react'
import "./ConvertPage.scss";
import Header from '../../components/Header/Header'
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';
import LiveRates from "../LiveRates/LiveRates";

const ConvertPage = (props) => {

  const {liveRateData, profileData, updateProfileData} = props;

  const handleConversion = (fromAmount, toAmount, from, to ) => {
    const temp = {...profileData};
    temp.holdings[from] -= fromAmount;
    if(!Object.keys(temp.holdings).includes(to)){
      temp.holdings[to]= toAmount;
    } else {
      temp.holdings[to] += toAmount;
    } 
    updateProfileData(temp);
  }

  const [test,setTest] = useState([])
  useEffect(() => {
    const temp = Object.keys(profileData.holdings).map((key, index) => <p key={index}>{key}: {profileData.holdings[key]}</p>);
    setTest(temp)
  }, [profileData])

  // const [tiles,setTiles] = useState([]);
  // useEffect(() => {
  //   const temp = Object.keys(profileData.holdings).map((key,index) => );
  //   setTiles(temp);
  // }, [profileData])
  
  return (

    <section className='convert-page'>
      <Header title="Convert" pageFunctionHeading="Currency Converter" textDescription="Buy and exchange currencies with ease" />
      {test}
      <CurrencyConverter profileData={profileData} liveRateData={liveRateData} handleConversion={handleConversion} />
      <Header
        title="Live Rates"
        pageFunctionHeading="View Live Rates"
        textDescription="See currency rates with your chosen currency in real time."
      />
      <section className="live-rates">
        <LiveRates />
      </section>
    </section>
  );
};

export default ConvertPage;
