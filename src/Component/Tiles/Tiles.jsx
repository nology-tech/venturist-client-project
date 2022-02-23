import "./Tiles.scss";

const Tiles= () => {


  return (

    <div className="tiles">
      <h1>Hey Samantha</h1>
      <div className="tiles__fund-box">
        <h3 className="tiles__fund-box__header" >Your funds:</h3>
        <h1 className="tiles__fund-box__amount">£12000</h1>
        <div className="tiles__fund-box__semicircle" ></div>
      </div>
    </div>
  );
}

export default Tiles;