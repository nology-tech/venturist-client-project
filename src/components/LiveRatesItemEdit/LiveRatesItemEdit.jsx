import React from "react";
import Button from "../Button/Button";
import "./LiveRatesItemEdit.scss";
import DropDown from "../DropDown/DropDown";

const LiveRatesItemEdit = (props) => {
  const { buttonFunction, buttonName, codes, handleCurrency, handleAmount } =
    props;

  return (
    <tr className="liverate-row" data-testid="liverate-row-edit">
      <td className="liverate-row__currency">
        <DropDown codes={codes} handleChange={handleCurrency} />
      </td>
      <td>
        <input
          className="liverate-row__input"
          placeholder="Enter amount"
          type="number"
          onChange={handleAmount}
        />
      </td>
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
