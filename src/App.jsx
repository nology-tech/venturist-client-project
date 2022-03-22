import "./App.scss";
import { useState } from "react";
import NavBar from "./containers/NavBar/NavBar";
import ConvertPage from "./containers/ConvertPage/ConvertPage";
import UserProfile from "./components/UserProfile/UserProfile";
import MakeTransferPage from "./containers/MakeTransferPage/MakeTransferPage";
import WalletPage from "./containers/WalletPage/WalletPage";
import LiveRatesPage from "./containers/LiveRatesPage/LiveRatesPage";
import ContactsPage from "./containers/ContactsPage/ContactsPage";
import DepositPage from "./containers/DepositPage/DepositPage";
import WithdrawPage from "./containers/WithdrawPage/WithdrawPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import liveRateData from "./assets/data/liveRatesExample";
import userProfile from "./assets/data/samanthaBrooksProfile";
import contactData from "./assets/data/contactExample";
import HomePage from "./containers/HomePage/HomePage";
import CreateAccountPage from "./containers/CreateAccountPage/CreateAccountPage";



const App = () => {
  const [profileData, setProfileData] = useState({ ...userProfile });
  const updateProfileData = (newData) => {
    setProfileData(newData);
  };

  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signup" element={<CreateAccountPage />}></Route>
          <Route
            path="/wallet"
            element={
              <>
                <NavBar />
                <UserProfile />
                <WalletPage
                  profileData={profileData}
                  liveRateData={liveRateData}
                />
              </>
            }
          ></Route>
          <Route
            path="/liverates"
            element={
              <>
                <NavBar />
                <UserProfile />
                <LiveRatesPage />
              </>
            }
          ></Route>
          <Route
            path="/convert"
            element={
              <>
                <NavBar />
                <UserProfile />
                <ConvertPage
                  liveRateData={liveRateData}
                  profileData={profileData}
                  updateProfileData={updateProfileData}
                />
              </>
            }
          ></Route>
          <Route
            path="/transfer"
            element={
              <>
                <NavBar />
                <UserProfile />
                <MakeTransferPage
                  liveRateData={liveRateData}
                  profileData={profileData}
                  contactData={contactData}
                />
              </>
            }
          ></Route>
          <Route
            path="/contacts"
            element={
              <>
                <NavBar />
                <UserProfile />
                <ContactsPage />
              </>
            }
          ></Route>
          <Route
            path="/deposit"
            element={
              <>
                <NavBar />
                <UserProfile />
                <DepositPage 
                  profileData={profileData}
                  updateProfileData={updateProfileData}
                  />
              </>
            }
          ></Route>
          <Route
            path="/withdraw"
            element={
              <>
                <NavBar />
                <UserProfile />
                <WithdrawPage 
                  profileData={profileData}
                  updateProfileData={updateProfileData}
              />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
