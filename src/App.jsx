import "./App.scss";
import MakeTransferChooseRecipient from "./components/MakeTransferChooseRecipient/MakeTransferChooseRecipient";
import NavBar from "./containers/NavBar/NavBar";
import Data from "./assets/data/contactExample";

const App = () => {
  return (
    <div className="App">
      
      <MakeTransferChooseRecipient userCardList = {Data} />
      <NavBar />
      
        
    </div>
  );
}

export default App;