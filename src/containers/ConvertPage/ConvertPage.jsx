import React, {useState, useEffect} from 'react'
import "./ConvertPage.scss";
import userProfile from "../../assets/data/samanthaBrooksProfile";
import liveRatesArr from "../../assets/data/liveRatesExample";
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';



const ConvertPage = () => {

  useEffect(() => {},userProfile,liveRatesArr)

  [profile,setProfile] = useState({...userProfile});
  [rates,setRates] = useState([...liveRatesArr]);

  console.log(userProfile);
  console.log(liveRatesArr);

  return (
    <section>
      <CurrencyConverter profile={Profile} rates={rates} />
    </section>
  )
}

export default ConvertPage;