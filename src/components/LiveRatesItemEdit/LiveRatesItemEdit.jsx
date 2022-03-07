import React from "react";
import Button from "../Button/Button";
import "./LiveRatesItemEdit.scss";
import CurrencyFlag from "react-currency-flags";
import DropDown from "../DropDown/DropDown";

const LiveRatesItemEdit = (props) => {
  const { buttonFunction, buttonName, codes, handleChange } =
    props;

  //buttonName, buttonStyle, hasIcon, iconSrc, iconPosition, buttonFunction

  return (
    <tr className="liverate-row" data-testid="liverate-row">
      <td className="liverate-row__currency">
      <DropDown codes={codes} handleChange={handleChange} />
      </td>
      <td><input placeholder="Enter amount" type="text" /></td>
      <td></td>
      <td className="liverate-row__button">
        <Button
          buttonName={buttonName}
          hasIcon={false}
          buttonFunction={buttonFunction}
        />
      </td>
    </tr>
  );
};

export default LiveRatesItemEdit;
