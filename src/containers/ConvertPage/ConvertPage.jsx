import React from 'react'
import "./ConvertPage.scss";
import Header from '../../components/Header/Header'
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';
import LiveRates from "../LiveRates/LiveRates";
import Wallet from '../../components/Wallet/Wallet';
import useFxApi from '../../Hooks/FX/useFxApi';

const ConvertPage = (props) => {

  // const [baseCurrency, setBaseCurrency] = useState("GBP");
  // const { status, ratesArr, getData } = useFxApi();
  // const [defaultCurrencies, setDefaultCurrencies] = useState(["USD", "EUR"]);
  // const [filteredRates, setFilteredRates] = useState([]);
  // const [message, setMessage] = useState("Loading live rates...");

  // const url = `https://venturist-app.nw.r.appspot.com/currencies/${baseCurrency}`;
  
  // useEffect(() => {
  //   getData(url);
  //   if (status === "success") {
  //     try {
  //       setFilteredRates(filterRates());
  //     } catch (err) {
  //       setMessage("Error getting rates. Please try again later");
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [status]);

  // const filterRates = () => {
  //   return ratesArr.filter((item) =>
  //     defaultCurrencies.includes(item.currencyCode)
  //   );
  // };

  const {profileData, updateProfileData} = props;

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
  
  return (

    <section className='convert-page'>
      <Header title="Convert" pageFunctionHeading="Currency Converter" textDescription="Buy and exchange currencies with ease." /> 
      <div className="tiles">
      <Wallet profileData={profileData} liveRateData={ratesArr}/>
      </div>
      <CurrencyConverter profileData={profileData} handleConversion={handleConversion} />
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
