import React, {useState} from "react";
import NavItem from "../../components/NavItem/NavItem";
import './Navbar.scss';

const Navbar = () => {

  const [activeButton,setActiveButton] = useState();

  const handleClick = (label) => {
    setActiveButton(label);
  }

  const buttonLabels = ["Wallet","Live Rates","Convert","Transfer","Contacts"];

  const buttons = buttonLabels.map(label => <NavItem label={label} handleClick={handleClick} activeButton={activeButton}/>)



  return (
    <nav className="navbar">
      <div className="navbar__header">
        <div className="navbar__header--logo"></div>
        <h2>VENTURIST</h2>
      </div>


      {buttons}
      <p>{activeButton}</p>
    </nav>
  );
};

export default Navbar;
