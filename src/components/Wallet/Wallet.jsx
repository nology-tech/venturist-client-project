import React, {useState, useEffect} from 'react'
import WalletTile from '../WalletTile/WalletTile';
import "./Wallet.scss";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase";
import {useNavigate} from "react-router-dom";
import Button from '../Button/Button';
import icons from "../../assets/icons/icons";

const Wallet = (props) => {

  const {profileData, liveRateData, setUserID} = props;

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

  const [tiles,setTiles] = useState([]);
  useEffect(() => {
    const temp = Object.keys(profileData.holdings).map((key,index) => {
      let currencyName = "";
      let currencySymbol = "";
      for(let currency of liveRateData) {
        if(currency.currencyCode === key) {
          currencyName =  currency.currencyName
          currencySymbol = currency.currencySymbol
        }
      }

      return <WalletTile key={index} currencyAmount={profileData.holdings[key]} currencySymbol={currencySymbol} currencyCode={key} currencyName={currencyName}/>
  }) 
  setTiles(temp)
  }, [profileData,liveRateData])

  return (
    <div>
      <div data-testid="wallet" className="wallet">{tiles}</div>
      <div className='wallet-signout'>
          <Button className="wallet-signout__button" buttonName="Sign Out" hasIcon={true} iconSrc={icons.SignOut} buttonFunction={logOut} />
      </div>
    </div>
  )
}

export default Wallet