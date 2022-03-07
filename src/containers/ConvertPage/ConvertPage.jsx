import React from 'react'
import "./ConvertPage.scss";
// import userProfile from "../../assets/data/samanthaBrooksProfile";
import liveRatesArr from "../../assets/data/liveRatesExample";
import Header from '../../components/Header/Header'
import DropDown from '../../components/DropDown/DropDown';
import 'currency-flags/dist/currency-flags.css';


const ConvertPage = () => {

  const handleChange = (value) => {
    // alert(value);
  }
  const codes = liveRatesArr.map(currency => currency.currencyCode);
  // useEffect(() => {},userProfile,liveRatesArr)

  // const [profile,setProfile] = useState({...userProfile});
  // const [rates,setRates] = useState([...liveRatesArr]);
  

  
  return (
    <section className='convert-page'>
      <Header title="Convert" pageFunctionHeading="Currency Converter" textDescription="Buy and exchange currencies with ease" />
      <section className='convert-page__dropDown'>
      {/* <DropDown options={testoptions} /> */}

      <DropDown codes={codes} handleChange= {handleChange}/>

      </section>
    </section>
  )
}

export default ConvertPage;