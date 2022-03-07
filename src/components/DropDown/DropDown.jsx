import React from 'react'
import "./DropDown.scss";
import Select, { components } from 'react-select';
import 'currency-flags/dist/currency-flags.css';



const DropDown = (props) => {


  const { SingleValue, Option } = components;
    const IconSingleValue = (props) => (
      <SingleValue {...props}>
          <div className={`currency-flag currency-flag-${props.data.code}`}/>
          {props.data.label}
      </SingleValue>
    );
    const IconOption = (props) => (
      <Option {...props}>
          <div className={`currency-flag currency-flag-${props.data.code}`} style={{ marginRight: '.5rem' }}/>
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


  const options = props.codes.map((currency, index) => (
      {
        value: currency.toUpperCase(),
        label: currency.toUpperCase(),
        code: currency,
        key: index
      }
  ))


    return (

      <div data-testid="currency-selector">
      <Select
        className='currency-selector'
        value={options.filter(option => option.label === props.currentCode)}
        options={options}
        components={{
          SingleValue: IconSingleValue,
          Option: IconOption
        }}
        styles={customStyles}
        onChange={(e) => props.handleChange(e.value)}
      />

</div>
    )

}

export default DropDown;