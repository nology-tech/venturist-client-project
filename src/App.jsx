import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import Data from "./assets/data/liveRatesExample";
import MakeTransferPage from "./containers/MakeTransferPage/MakeTransferPage";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <MakeTransferPage liveRateData={Data} />
    </div>
  );
};

export default App;