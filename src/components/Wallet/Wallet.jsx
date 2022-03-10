import React, {useState, useEffect} from 'react'
import WalletTile from '../WalletTile/WalletTile';
import "./Wallet.scss";

const Wallet = (props) => {

  const {profileData, liveRateData} = props;


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
    <div data-testid="wallet" className="wallet">{tiles}</div>
  )
}

export default Wallet