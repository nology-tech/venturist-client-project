import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import Data from "./assets/data/liveRatesExample";

const App = () => {
  return (
    <div className="App">
      
      <MakeTransferChooseRecipient userCardList = {Data} />
      <NavBar />
      
        
    </div>
  );
}

export default App;