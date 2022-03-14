import React from "react";
import NavItem from "../../components/NavItem/NavItem";
import './NavBar.scss';
import logo from "../../assets/logos/logo.png";
import icons from "../../assets/icons/icons";
import Button from "../../components/Button/Button"
import {Link} from "react-router-dom";

const NavBar = () => {

  const buttonLabels = ["Wallet","Live Rates","Convert","Transfer","Contacts","Deposit","Withdraw"];

  const buttons = buttonLabels.map((label,index) => <NavItem key={index} label={label} 
    index={index}
    icon={icons[label.split(" ").join("")]}    
    />);

  return (
    <nav className="navbar" data-testid="navbar">
      <Link to="/" className="navbar__header" style={{ textDecoration: 'none' }}>
        <div className="navbar__header--logo" >
          <img src={logo} alt="" />
          <h2>VENTURIST</h2>
        </div>
      </Link>

      <section className="navbar__menu">
        {buttons}
      </section>
      <div className="navbar__button">
        <Button buttonName="Sign Out" hasIcon={true} iconSrc={icons.SignOut}/>
      </div>

    </nav>
  );
};

export default NavBar;
