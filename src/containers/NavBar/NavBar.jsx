import React from "react";
import NavItem from "../../components/NavItem/NavItem";
import './NavBar.scss';
import logo from "../../assets/logos/logo.png";
import icons from "../../assets/icons/icons";
import Button from "../../components/Button/Button"
import {Link, useNavigate} from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase";



const NavBar = (props) => {

  const nav = useNavigate();

  const logOut = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        nav("/")
        props.setUserID("");
      })
      .catch((error) => alert("Something Went Wrong :c"))
  }

  const buttonLabels = ["Wallet","Live Rates","Convert","Transfer","Contacts","Deposit","Withdraw"];

  const buttons = buttonLabels.map((label,index) => <NavItem key={index} label={label} 
    index={index}
    icon={icons[label.split(" ").join("")]}    
    />);

  return (
    <nav className="navbar" data-testid="navbar">
      <div className="navbar__header">
        <div className="navbar__header--logo" >
          <img src={logo} alt="" />
          <h2>VENTURIST</h2>
        </div>
      </div>

      <section className="navbar__menu">
        {buttons}
      </section>
      <div className="navbar__button">
        <Button buttonName="Sign Out" hasIcon={true} iconSrc={icons.SignOut} buttonFunction={logOut} />
      </div>

    </nav>
  );
};

export default NavBar;
