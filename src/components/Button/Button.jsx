import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { buttonName, buttonStyle, hasIcon, iconSrc, buttonFunction } = props;

  const renderIcon = () => {
    return <img src={iconSrc} alt={buttonName} />;
  };

  const buttonStyleSelect = (buttonStyle) => {
    switch (buttonStyle) {
      case "clear":
        return "button--clear";
      case "white":
        return "button--white";
      default:
        return "button--blue";
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
