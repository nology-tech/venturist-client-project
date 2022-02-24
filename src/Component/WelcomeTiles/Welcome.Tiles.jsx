import Tiles from "../Tiles/Tiles";
import "./WelcomeTiles.scss";
import Data from "../../../accountInfo";


const WelcomeTiles= (props) => {



  // const accountMap = Data.map((account) => {
  //   account.accountName})
  
    const name = bill;

  return (

    <div className="welcome-tiles">
      <Tiles accountName={name.props} accountBalance={Data.accountBalance} currencySymbol={Data.currencySymbol}/>

    </div>
  );
  }

export default WelcomeTiles;
