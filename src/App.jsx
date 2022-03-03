import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import ConvertPage from "./containers/ConvertPage/ConvertPage"
import UserProfile from "./components/UserProfile/UserProfile"
import MakeTransferPage from "./containers/MakeTransferPage/MakeTransferPage";
import WalletPage from "./containers/WalletPage/WalletPage";
import LiveRatesPage from "./containers/LiveRatesPage/LiveRatesPage";
import ContactsPage from "./containers/ContactsPage/ContactsPage"
import DepositPage from "./containers/DepositPage/DepositPage";
import WithdrawPage from "./containers/WithdrawPage/WithdrawPage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <Router>
    <div className="App">
        <NavBar />
        <UserProfile />
        <Routes>
          <Route path="/Wallet" element={<WalletPage />}></Route>
          <Route path="/LiveRates" element={<LiveRatesPage />}></Route>
          <Route path="/Convert" element={<ConvertPage />}></Route>
          <Route path="/Transfer" element={<MakeTransferPage />}></Route>
          <Route path="/Contacts" element={<ContactsPage />}></Route>
          <Route path="/Deposit" element={<DepositPage />}></Route>
          <Route path="/Withdraw" element={<WithdrawPage />}></Route>
        </Routes>
    </div>
    </Router>
  );
};

export default App;