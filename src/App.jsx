import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Wallet"/>
          <Route path="/LiveRates"/>
          <Route path="/Convert" />
          <Route path="/Transfer" />
          <Route path="/Contacts" />
          <Route path="/Deposit" />
          <Route path="/Withdraw" />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;