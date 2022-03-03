import React, {useState} from 'react'
import Header from '../../components/Header/Header';
import MakeTransferConfirmAccount from '../../components/MakeTransferConfirmAccount/MakeTransferConfirmAccount';
import MakeTransferForm from '../../components/MakeTransferForm/MakeTransferForm';
import MakeTransferChooseCurrency from "./../../components/MakeTransferChooseCurrency/MakeTransferChooseCurrency";
import "./MakeTransferPage.scss";

const MakeTransferPage = (props) => {

  const {liveRateData, profileData, contactData} = props;

  const [showCurrencyModal, setShowCurrencyModal] = useState(false);
  const [currencyFrom, setCurrencyFrom] = useState(liveRateData[0]);
  const [currencyTo, setCurrencyTo] = useState(liveRateData[1]);
  const [changingCurrency, setChangingCurrency] = useState("to");
  
  const handleShowCurrencyModal = () => {
    setShowCurrencyModal(!showCurrencyModal);
  }

  const handleChangingCurrency = (event) => {
    if(event.target.classList.contains("transfer-page__currency__card__overlay")) {
      const chosenCurrencyCode = event.target.id.slice(25,28);
      const chosenCurrencyObj = liveRateData.filter(currency => currency.currencyCode === chosenCurrencyCode)[0];
      if(changingCurrency==="to") {
        setCurrencyTo(chosenCurrencyObj)
      } else if(changingCurrency==="from"){
        setCurrencyFrom(chosenCurrencyObj);
      }
    } else if(event.target.classList.contains("transfer-form-bar__currency-to")) {
      setChangingCurrency("to");
    } else if(event.target.classList.contains("transfer-form-bar__currency-from")) {
      setChangingCurrency("from");
    }
    handleShowCurrencyModal();
  }

  return (
    <div className='make-transfer'>
        <Header title="Transfer" pageFunctionHeading="Make Transfer" textDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis. Integer amet, donec massa fermentum nunc eget netus." />

        {/* <MakeTransferForm exchangeFrom={currencyFrom} exchangeTo={currencyTo} handleChangingCurrency={handleChangingCurrency} /> */}

        {showCurrencyModal && <MakeTransferChooseCurrency currencyData={liveRateData} handleChangingCurrency={handleChangingCurrency}/>}

        <MakeTransferConfirmAccount profileData={profileData} data={contactData} />
    </div>

  )
}

export default MakeTransferPage