import React, {useEffect, useState} from 'react'
import './CurrencyConverter.scss'
import DropDown from '../../components/DropDown/DropDown'
import CircularButton from '../../components/CircularButton/CircularButton'
import icons from '../../assets/icons/icons'
import Button from '../../components/Button/Button'
import {getCurrencyName} from 'currency-iso';
import useFxApi from "../../Hooks/FX/useFxApi";

const CurrencyConverter = (props) => {
  const {profileData, userHoldings, getUserData} = props;

  const { status, ratesArr, getData } = useFxApi();

  const url = `https://venturist-app.nw.r.appspot.com/currencies/GBP`;

  useEffect(() => {
    getData(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);
  
  const swap = () => {
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
  const [holdingFrom,setHoldingFrom] = useState([]);
  const [holdingTo,setHoldingTo] = useState([]);
  const [convertibleCurrencies, setConvertibleCurrencies] = useState([]);

  const changeTo = (selected) => {
    setTo(selected);
    if (ownedCurrencies.includes(selected.toLowerCase())) {
      setHoldingTo(...[...userHoldings.filter(holding => (holding.currencyCode===selected))]);
    }
    else {
      setHoldingTo({
        userID: profileData.userID,
        currencyName: getCurrencyName(selected),
        currencyCode: selected,
        currencySymbol: ""
      })
    };
  }
  const changeFrom = (selected) => {
    setFrom(selected)
    setHoldingFrom(...[...userHoldings.filter(holding => (holding.currencyCode===selected))]);
  }

  const updateAmount = (event) => {
    setAmount(event.target.value);
  }

  const ownedCurrencies = userHoldings.map(holdings => holdings.currencyCode.toLocaleLowerCase());

  useEffect(() => {
    setConvertibleCurrencies(ratesArr.map(currency => currency.currencyCode.toLowerCase()));
  }, [ratesArr]);

  useEffect(() => {
  console.log(convertibleCurrencies)
  },[convertibleCurrencies]);

  const convertPressed = () => {
    setTime(new Date());

    if (to && from && amount > 0 && amount < holdingFrom.amount) {
      setConvert(true);
      performConversion();
    } else if (Number(amount) > holdingFrom.amount) {
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

    for (let rateObject of ratesArr) {
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
  const fetchConversion = async () => {
    await fetch(`https://venturist-app.nw.r.appspot.com/holdings`, {
      method: "PUT",
      headers: {
        "Accept": "application/JSON",
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify({
        userID: holdingFrom.userID,
        currencyName: holdingFrom.currencyName,
        amount: Number((holdingFrom.amount - amount).toFixed(2)),
        currencyCode: holdingFrom.currencyCode,
        currencySymbol: holdingFrom.currencySymbol
      })
    })
      .catch(error => alert(error));

    if (ownedCurrencies.includes(to.toLowerCase())) {
      await fetch(`https://venturist-app.nw.r.appspot.com/holdings`, {
        method: "PUT",
        headers: {
          "Accept": "application/JSON",
          "Content-Type": "application/JSON"
        },
        body: JSON.stringify({
          userID: profileData.userID,
          currencyName: "",
          amount: Number((holdingTo.amount + convertedAmount).toFixed(2)),
          currencyCode: to,
          currencySymbol: ""
        })
      })
        .catch(error => alert(error));

    } else {
      await fetch(`https://venturist-app.nw.r.appspot.com/holding`, {
      method: "POST",
      headers: {
        "Accept": "application/JSON",
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify({
        userID: holdingTo.userID,
        currencyName: holdingTo.currencyName,
        amount: Number((convertedAmount).toFixed(2)),
        currencyCode: holdingTo.currencyCode,
        currencySymbol: holdingTo.currencySymbol
      })
    })
      .catch(error => alert(error));
    }

    await getUserData();
  }

  return (
    <>{ratesArr &&
    <section className='currency-converter' data-testid="currency-converter">
      <div className='currency-converter__grid'>
        <h3 className='currency-converter__grid--heading'>Amount</h3>
        <h3 className='currency-converter__grid--heading'>From</h3>
        <div></div>
        <h3 className='currency-converter__grid--heading'>To</h3>
        <input type="text" autoComplete='off' className='currency-converter__grid--input' onInput={updateAmount} placeholder="0"></input>
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
            fetchConversion();
          }}/>
        </div>
        </div>}
    </section>}</>
  )
}

export default CurrencyConverter