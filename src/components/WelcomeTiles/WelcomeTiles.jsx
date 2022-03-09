import Tiles from "../Tiles/Tiles";
import "./WelcomeTiles.scss";
import realData from "../../assets/data/samanthaBrooksProfile";

const WelcomeTiles= () => {

  return (
    <div data-testid="welcome-tiles" className="welcome-tiles">
     <Tiles accountName = {realData.firstName} accountBalance = {realData.cards[0].amount} currencySymbol = {realData.cards[0].currencySymbol} />
    </div>
  );
}

export default WelcomeTiles;
