import React from "react";
import "./Header.scss";

const Header = (props) => {
  const { h5, h1, p } = props;
  return (
    <div className="header">
      <h5 className="header__title">Convert</h5>
      <h1 className="header__page-function">Currency Converter</h1>
      <p className="header__description">
        All your friends and family financial details in one place. Easily
        transfer currency internationally at the best possible rates.
      </p>
    </div>
  );
};

export default Header;
