import Tiles from "../Tiles/Tiles";
import "./WelcomeTiles.scss";
import Data from "../../accountInfo";


const WelcomeTiles= () => {

  const accountMap = Data.map((account) => {
    return account.accountName
  })

  const renderAccountInfo = Data.map(account => {
    return <Tiles accountName = {account.accountName} accountBalance = {account.accountBalance} currencySymbol = {account.currencySymbol} />
  }).slice(1, 2)
  
  return (

    <div className="welcome-tiles">
     {renderAccountInfo}
    </div>
  );
  }

export default WelcomeTiles;
