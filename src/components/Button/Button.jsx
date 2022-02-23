import React from "react";

const Button = (props) => {
  const { buttonName, hasIcon, iconSrc, buttonFunction } = props;

  const renderIcon = () => {
    return <img src={iconSrc} alt={buttonName} />;
  };

  return (
    <>
      <button className="button" onClick={() => buttonFunction}>
        {buttonName}
        {hasIcon && renderIcon()}
      </button>
    </>
  );
};

export default Button;
