import "./Tiles.scss";

const Tiles= (props) => {
 
  // Prop = name of account holder, account balance, currency symbol

  const {accountName, accountBalance, currencySymbol} = props;

  return (

    <div data-testid="tiles" className="tiles">
      <h1 className="tiles__greeting">{`Hey ${accountName} 👋`}</h1>
      <div className="tiles__fund-box">
        <h3 className="tiles__fund-box__header" >Your funds:</h3>
        <h1 className="tiles__fund-box__amount">{currencySymbol}{accountBalance}</h1>
        <div className="tiles__fund-box__semicircle" ></div>
      </div>
    </div>
  );
}

export default Tiles;