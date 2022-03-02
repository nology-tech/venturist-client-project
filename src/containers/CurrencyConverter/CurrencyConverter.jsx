import React from 'react'
import DropDown from '../../components/DropDown/DropDown'
import "./CurrencyConverter.scss";

const testOptions = ["GBP","USD","EUR","YEN","AUD"];

const CurrencyConverter = (props) => {

  return (
    <section className="currency-converter">
      <DropDown options={testOptions}/>
    </section>
  )
}

export default CurrencyConverter