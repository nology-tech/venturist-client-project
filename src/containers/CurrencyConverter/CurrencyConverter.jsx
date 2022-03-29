import React, {useState} from 'react'
import './CurrencyConverter.scss'
import DropDown from '../../components/DropDown/DropDown'
import CircularButton from '../../components/CircularButton/CircularButton'
import icons from '../../assets/icons/icons'
import Button from '../../components/Button/Button'

const CurrencyConverter = (props) => {
  const {liveRateData, profileData, handleConversion} = props;
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

  const swap = (value) => {
    if ((to && from) && (to !== from) && (ownedCurrencies.includes(to.toLowerCase())))  {
      const temp = to;
      setTo(from);
      setFrom(temp);
    } else if (to && !ownedCurrencies.includes(to.toLowerCase())) {
      alert(`You do not currently own any ${to} currencies.`)
    } else {
      alert("Select currencies")
    }
  }
  
  const [amount, setAmount] = useState(0);
  const [to,setTo] = useState(false);
  const [from,setFrom] = useState(false);
  const [convert,setConvert] = useState(false);
  const [convertedAmount,setConvertedAmount] = useState(0);
  const [currencyNames,setCurrencyNames] = useState(["",""]);
  const [rateFrom,setRateFrom] = useState(0);
  const [rateTo,setRateTo] = useState(0);
  const [time, setTime]=useState(0);

  const changeTo = (selected) => {
    setTo(selected);
  }
  const changeFrom = (selected) => {
    setFrom(selected)
  }

  const updateAmount = (event) => {
    setAmount(event.target.value);
  }

  const ownedCurrencies = Object.keys(profileData.holdings).map(code => code.toLocaleLowerCase());
  const convertibleCurrencies = liveRateData.map(currency => currency.currencyCode.toLowerCase());
  console.log(liveRateData)

  const convertPressed = () => {
    setTime(new Date());

    if (to && from && amount > 0 && amount < profileData.holdings[from]) {
      setConvert(true);
      performConversion();
    } else if (Number(amount) > profileData.holdings[from]) {
      alert ("Invalid Conversion Amount. Check Balance.")
    } else {
      setConvert(false);
      alert("Enter Correct Details")
    }
  }

  const performConversion = () => {
    let tempTo = 1;
    let tempFrom = 1;
    const temp = [...currencyNames];

    for (let rateObject of liveRateData) {
      if (rateObject.currencyCode === to) {
        tempTo = rateObject.liveRate;
        temp[1] = rateObject.currencyName;
      } else if (rateObject.currencyCode === from) {
        tempFrom = rateObject.liveRate;
        temp[0] = rateObject.currencyName;
      }
    }

    setConvertedAmount( (amount/tempFrom) * tempTo ) ;
    setRateFrom(tempFrom);
    setRateTo(tempTo);
    setCurrencyNames(temp);

  }


  return (
    <section className='currency-converter' data-testid="currency-converter">
      <div className='currency-converter__grid'>
        <h3 className='currency-converter__grid--heading'>Amount</h3>
        <h3 className='currency-converter__grid--heading'>From</h3>
        <div></div>
        <h3 className='currency-converter__grid--heading'>To</h3>
        <input type="text" autoComplete='off' value={amount} className='currency-converter__grid--input' onInput={updateAmount}></input>
        <DropDown codes={ownedCurrencies} handleChange= {changeFrom} currentCode={from} />
        <CircularButton content={icons.Convert} handleClick={swap}/>
        <DropDown codes={convertibleCurrencies} handleChange= {changeTo} currentCode={to} />
      </div>
      <div className='currency-converter__button'>
        <Button buttonName="Convert" hasIcon={true} iconSrc={icons.Convert} iconPosition="left" buttonFunction={convertPressed} />
      </div>
      {convert && <div className='currency-converter__convert'>
        <div className="currency-converter__convert--numbers">
          <h4>{amount+" "+currencyNames[0]+" ="}</h4> 
          <h3>{convertedAmount.toFixed(2) + " " + currencyNames[1]} </h3>
          <p className='fineprint'>1 {from} = {(1/rateFrom)*rateTo} {to}</p>
          <p className='fineprint'>1 {to} = { (1/rateTo)*rateFrom} {from}</p>
          <p className='fineprint'>Last Updated: {time.toUTCString()} </p>
        </div>
        <div className="currency-converter__convert--right">
          <Button buttonName="Make Transfer" hasIcon={false} buttonFunction={()=> {
            setConvert(false);
            handleConversion(amount, Number(convertedAmount.toFixed(2)), from, to)}}/>
        </div>
        </div>}
      

    </section>
  )
}

export default CurrencyConverter