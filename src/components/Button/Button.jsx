import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { buttonName, buttonStyle, hasIcon, iconSrc, buttonFunction } = props;

  const renderIcon = () => {
    return <img src={iconSrc} alt={buttonName} />;
  };

  const buttonStyleSelect = (buttonStyle) => {
    switch (buttonStyle) {
      case "blank":
        return "button--blank";
      default:
        return "button--default";
    }
  }

  return (
    <>
      <button className={`button ${buttonStyleSelect(buttonStyle)}`} onClick={buttonFunction}>
        {buttonName}
        {hasIcon && renderIcon()}
      </button>
    </>
  );
};

export default Button;
