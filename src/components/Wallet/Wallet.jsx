import React from 'react'
import WalletTile from '../WalletTile/WalletTile';
import "./Wallet.scss";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase";
import {useNavigate} from "react-router-dom";
import Button from '../Button/Button';
import icons from "../../assets/icons/icons";

const Wallet = (props) => {

  const { userHoldings, setUserID } = props;

  const tiles = userHoldings.map((holding,index) => {
      return <WalletTile key={index} currencyAmount={holding.amount} currencySymbol={holding.currencySymbol} currencyCode={holding.currencyCode} currencyName={holding.currencyName}/>
    } )
  
  const nav = useNavigate();

  const logOut = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        nav("/")
        setUserID("");
        window.sessionStorage.setItem('userID', "");
        window.sessionStorage.setItem('lastUpdateTime', 0);
      })
      .catch((error) => alert("Something Went Wrong"));
  }


  return (
    <div data-testid="wallet" className="wallet">
      {tiles}
      <div className='wallet-signout'>
          <Button className="wallet-signout__button" buttonName="Sign Out" hasIcon={true} iconSrc={icons.SignOut} buttonFunction={logOut} />
      </div>
    </div>
  )
}

export default Wallet