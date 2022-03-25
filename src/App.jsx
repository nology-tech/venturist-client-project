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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import liveRateData from "./assets/data/liveRatesExample";
import userProfile from "./assets/data/samanthaBrooksProfile";
import contactData from "./assets/data/contactExample";
import HomePage from "./containers/HomePage/HomePage";
import LoginPage from "./containers/LoginPage/LoginPage";
import CreateAccountPage from "./containers/CreateAccountPage/CreateAccountPage";
import ErrorPage from "./containers/404Page/404Page";

const App = () => {
  const [profileData, setProfileData] = useState({ ...userProfile });
  const updateProfileData = (newData) => {
    setProfileData(newData);
  };
  const [userID, setUserID] = useState("");

  const setUid = (uid) => {
    setUserID(uid);
    console.log(userID);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage setUid={setUid} />}></Route>
          <Route path="/signup" element={<CreateAccountPage />}></Route>
          {userID && (
            <>
              <Route
                path="/wallet"
                element={
                  <>
                    <NavBar setUserID={setUserID} />
                    <UserProfile userID={userID} />
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
                    <NavBar setUserID={setUserID} />
                    <UserProfile userID={userID} />
                    <LiveRatesPage />
                  </>
                }
              ></Route>
              <Route
                path="/convert"
                element={
                  <>
                    <NavBar setUserID={setUserID} />
                    <UserProfile userID={userID} />
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
                    <NavBar setUserID={setUserID} />
                    <UserProfile userID={userID} />
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
                    <NavBar setUserID={setUserID} />
                    <UserProfile userID={userID} />
                    <ContactsPage />
                  </>
                }
              ></Route>
              <Route
                path="/deposit"
                element={
                  <>
                    <NavBar setUserID={setUserID} />
                    <UserProfile userID={userID} />
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
                    <NavBar setUserID={setUserID} />
                    <UserProfile userID={userID} />
                    <WithdrawPage
                      profileData={profileData}
                      updateProfileData={updateProfileData}
                    />
                  </>
                }
              ></Route>{" "}
            </>
          )}
          <Route path="/404-page" element={<ErrorPage />}></Route>
          <Route path="*" element={<Navigate to="/404-page" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
