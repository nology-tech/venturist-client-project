import React from 'react'
import "./DropDown.scss";
import Select, { components } from 'react-select';
import 'currency-flags/dist/currency-flags.css';

// import CurrencyFlag from "currency-flags";
// import imageGBP from '../../assets/countryFlags/gbp.png';
// import { components } from 'react-select';
// const { SingleValue, Option } = components;


const DropDown = () => {



  // const stringArray = ['usd', 'gbp', 'eur']

  //   const createOptions = stringArray.map((currency, index) => {
  //     const option = {}
  //     option.value = index + 1
  //     option.label = <div class={`currency-flag currency-flag-${currency}`}>USD</div>
      
  //     return option
  //   })


  //   // const = flagcss.map(cssstyle=> cssstyle.label)
 

  // return (
  //    <div className="drop-down">
       
  //     <Select
  //       options={createOptions}
        
  //     />

  //   </div>

  // )

  const { SingleValue, Option } = components;
    const IconSingleValue = (props) => (
      <SingleValue {...props}>
          <div className={`currency-flag currency-flag-${props.data.code}`}/>
          {props.data.label}
      </SingleValue>
    );
    const IconOption = (props) => (
      <Option {...props}>
          <div className={`currency-flag currency-flag-${props.data.code}`}/>
          {props.data.label}
      </Option>
    );
    const customStyles = {
      option: (provided) => ({
          ...provided,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
      }),
      singleValue: (provided) => ({
          ...provided,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
      }),
  }

  const codes = ['usd', 'gbp', 'eur']

  const options = codes.map((currency, index) => (
      {
        value: index,
        label: currency.toUpperCase(),
        code: currency
      }
  ))


  //   const options = [
  //     {
  //         label: 'Option 1',
  //         value: 0,
  //         code: 'usd'
  //     },
  //     {
  //         label: 'Option 2',
  //         value: 1,
  //         code: 'gbp'
  //     }
  // ];

    return (
      <Select
        options={options}
        components={{
          SingleValue: IconSingleValue,
          Option: IconOption
        }}
        styles={customStyles}
        onChange={(e) => console.log(e)}
      />
    )

}

export default DropDown;