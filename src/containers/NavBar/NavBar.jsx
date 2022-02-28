import React, {useState} from "react";
import NavItem from "../../components/NavItem/NavItem";
import './NavBar.scss';
import logo from "../../assets/logos/logo.png";
import icons from "../../assets/icons/icons";


const NavBar = () => {

  const [activeButton,setActiveButton] = useState("/");

  const handleClick = (label) => {
    setActiveButton(label);
  }

  const buttonLabels = ["Wallet","Live Rates","Convert","Transfer","Contacts","Deposit","Withdraw"];

  const buttons = buttonLabels.map((label,index) => <NavItem key={index} label={label} 
    handleClick={handleClick} 
    activeButton={activeButton} 
    index={index}
    icon={icons[label.split(" ").join("")]}    
    />);

  return (
    <nav className="navbar" data-testid="navbar">
      <div className="navbar__header" onClick={() => handleClick("/")}>
        <div className="navbar__header--logo" >
          <img src={logo} alt="" />
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
