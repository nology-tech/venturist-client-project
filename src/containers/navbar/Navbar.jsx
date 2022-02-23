import React, {useState} from "react";
import NavItem from "../../components/NavItem/NavItem";
// import './Navbar.scss';

const Navbar = () => {

  const [activeButton,setActiveButton] = useState();

  const handleClick = (label) => {
    setActiveButton(label);
  }

  const buttonLabels = ["Wallet","Live Rates","Convert","Transfer","Contacts"];

  const buttons = buttonLabels.map(label => <NavItem label={label} handleClick={handleClick} activeButton={activeButton}/>)



  return (
     // Logo

    // Couple of Buttons

    // Bunch of Empty Space

    // Sign Out Button
    <nav>


      {buttons}
      <p>{activeButton}</p>

    </nav>
    
  )
}

export default Navbar;