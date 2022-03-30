import React, {useState, useEffect} from 'react'
import WalletTile from '../WalletTile/WalletTile';
import "./Wallet.scss";

const Wallet = (props) => {

  const {userHoldings} = props;


  const [tiles,setTiles] = useState([]);
  useEffect(() => {
    const temp = userHoldings.map((holding,index) => {
      return <WalletTile key={index} currencyAmount={holding.amount} currencySymbol={holding.currencySymbol} currencyCode={holding.currencyCode} currencyName={holding.currencyName}/>
  }) 
  setTiles(temp)
  }, [userHoldings])

  return (
    <div data-testid="wallet" className="wallet">{tiles}</div>
  )
}

export default Wallet