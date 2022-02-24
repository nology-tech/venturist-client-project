import React, {useState} from "react";
import NavItem from "../../components/NavItem/NavItem";
import './NavBar.scss';

const NavBar = () => {

  const [activeButton,setActiveButton] = useState();

  const handleClick = (label) => {
    setActiveButton(label);
  }

  const buttonLabels = ["Wallet","Live Rates","Convert","Transfer","Contacts"];

  const buttons = buttonLabels.map((label,index) => <NavItem label={label} handleClick={handleClick} activeButton={activeButton} index={index}/>)
  return (
    <nav className="navbar" data-testid="navbar">
      <div className="navbar__header">
        <div className="navbar__header--logo">
        <h2>VENTURIST</h2>
        </div>
      </div>

      <section className="navbar__menu">
        {buttons}
      </section>
    </nav>
  );
};

export default NavBar;
