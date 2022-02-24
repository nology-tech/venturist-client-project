import React from "react";
import "./Button.scss";

const Button = (props) => {
  const {
    buttonName,
    buttonStyle,
    hasIcon,
    iconSrc,
    iconPosition,
    buttonFunction,
  } = props;

  const renderIcon = () => {
    return <img src={iconSrc} alt={buttonName} />;
  };

  const buttonStyleSelect = () => {
    switch (buttonStyle) {
      case "clear":
        return "button--clear";
      case "white":
        return "button--white";
      default:
        return "button--blue";
    }
  };
  const iconPositionSet = () => {
    switch (iconPosition) {
      case "left":
        return "icon-left";
      case "right":
        return "icon-right";
      default:
        return "";
    }
  };

  return (
    <>
      <button
        className={`button ${buttonStyleSelect()} ${iconPositionSet()}`}
        onClick={buttonFunction}
      >
        {buttonName}
        {hasIcon && renderIcon()}
      </button>
    </>
  );
};

export default Button;
