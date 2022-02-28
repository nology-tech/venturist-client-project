import React, {useState} from "react";
import NavItem from "../../components/NavItem/NavItem";
import './NavBar.scss';
import {Link} from "react-router-dom"
import logo from "../../assets/logos/logo.png";
import icons from "../../assets/icons/icons";


const NavBar = () => {

  const [activeButton,setActiveButton] = useState();

  const handleClick = (label) => {
    setActiveButton(label);
  }

  const buttonLabels = ["Wallet","Live Rates","Convert","Transfer","Contacts","Deposit"];

  const buttons = buttonLabels.map((label,index) => <NavItem label={label} 
    handleClick={handleClick} 
    activeButton={activeButton} 
    index={index}
    icon={icons[label]}    
    />);

  return (
    <nav className="navbar" data-testid="navbar">
      <div className="navbar__header">
        <Link to="/" style={{ textDecoration: 'none' }} className="navbar__header--logo">
          <img src={logo} alt="" />
          <h2>VENTURIST</h2>
        </Link>
      </div>

      <section className="navbar__menu">
        {buttons}
      </section>
    </nav>
  );
};

export default NavBar;
