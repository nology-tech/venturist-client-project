import React from 'react'
import WalletTile from '../WalletTile/WalletTile';
import "./Wallet.scss";

const Wallet = (props) => {

  const {userHoldings} = props;

    const tiles = userHoldings.map((holding,index) => {
      return <WalletTile key={index} currencyAmount={holding.amount} currencySymbol={holding.currencySymbol} currencyCode={holding.currencyCode} currencyName={holding.currencyName}/>
    } )


  return (
    <div data-testid="wallet" className="wallet">
      {!userHoldings && <h3>Loading...</h3>}
      {tiles}
    </div>
  )
}

export default Wallet