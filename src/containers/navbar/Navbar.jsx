import React, { useState } from "react";
import './Navbar.scss';

const Navbar = () => {
  const [activeButton, setActiveButton] = useState();

  return (
    <nav className="navbar">
      <div className="navbar__header">
        <div className="navbar__header--logo"></div>
        <h2>VENTURIST</h2>
      </div>
    </nav>
  );
};

export default Navbar;
