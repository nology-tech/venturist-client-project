import Tiles from "../Tiles/Tiles";
import "./WelcomeTiles.scss";
import Data from "../../accountInfo";


const WelcomeTiles= () => {



  const renderAccountInfo = Data.map(account => {
    return <Tiles accountName = {account.accountName} accountBalance = {account.accountBalance} currencySymbol = {account.currencySymbol} />
  }).slice(0,1)
  
  return (

    <div data-testid="welcome-tiles" className="welcome-tiles">
     {renderAccountInfo}
    </div>
  );
  }

export default WelcomeTiles;
