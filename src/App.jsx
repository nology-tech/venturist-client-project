import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import Data from "./assets/data/liveRatesExample";
import MakeTransferPage from "./containers/MakeTransferPage/MakeTransferPage";
import profileData from "./assets/data/samanthaBrooksProfile"
import contactData from "./assets/data/contactExample";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <MakeTransferPage liveRateData={Data} profileData={profileData} contactData={contactData} />
    </div>
  );
};

export default App;