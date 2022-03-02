import React from 'react';
import CurrencyFlag from 'react-currency-flags';
import "./DropDown.scss";


const DropDown = (props) => {
 
  
  const options = props.options.map(option => 
  <option value= {option}>
    <CurrencyFlag currency={option} size="sm" />
    {option}
  </option> );


  return (
    <div className='drop-down'>
      <select name="drop-down" id="drop-down" className='drop-down__option'>
        {options}
      </select>
    </div>
  )
}

export default DropDown;