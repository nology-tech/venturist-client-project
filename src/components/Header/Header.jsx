import React from "react";
import "./Header.scss";

const Header = (props) => {

  const { title, pageFunctionHeading, textDescription } = props;

  return (
    <div className="header">
      <h5 className="header__title">{title}</h5>
      <h1 className="header__page-function">{pageFunctionHeading}</h1>
      <p className="header__description">{textDescription}</p>
    </div>
  );
};

export default Header;

// To use this header component call it in whatever page you're building and populate the title & pageFunctionHeading inside the props. To populate the description text create a variable called text assign to it the value of the description you would like to use and pass text to the textDescription props
