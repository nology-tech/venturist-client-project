import React from "react";
import "./Button.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import * as IconsSolid from "@fortawesome/free-solid-svg-icons";
import * as IconsRegular from "@fortawesome/free-regular-svg-icons";

const iconListSolid = Object.keys(IconsSolid)
  .filter(key => key !== "fas" && key !== "prefix")
  .map(icon => IconsSolid[icon]);

library.add(...iconListSolid);
const iconListRegular = Object.keys(IconsRegular)
  .filter(key => key !== "far" && key !== "prefix")
  .map(icon => IconsRegular[icon]);

library.add(...iconListRegular);

const Button = props => {
  const { buttonName, buttonStyle, hasIcon, iconSrc, iconPosition, buttonFunction } =
    props;

  const renderIcon = () => {
    return iconSrc;
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
        return "button--icon-left";
      case "right":
        return "button--icon-right";
      default:
        return "";
    }
  };

  return (
    <>
      <button
        className={`button ${buttonStyleSelect()} ${iconPositionSet()}`}
        type="button"
        onClick={buttonFunction}
        data-testid="button"
      >
        {buttonName}
        {hasIcon && renderIcon()}
      </button>
    </>
  );
};

export default Button;
