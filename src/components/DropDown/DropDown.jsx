import React from 'react'
import "./DropDown.scss";

const DropDown = (props) => {

  const options = props.options.map(option => <option value={option}>{option}</option>);

  return (
    <div>
      <select name="drop-down" id="drop-down">
        {options}
      </select>

    </div>
  )
}

export default DropDown;