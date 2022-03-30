import "./App.scss";
import { useState, useEffect } from "react";
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

import userProfile from "./assets/data/samanthaBrooksProfile";
import contactData from "./assets/data/contactExample";
import HomePage from "./containers/HomePage/HomePage";
import LoginPage from "./containers/LoginPage/LoginPage";
import CreateAccountPage from "./containers/CreateAccountPage/CreateAccountPage";
import ErrorPage from "./containers/404Page/404Page";
import useFxApi from "./Hooks/FX/useFxApi";

const App = () => {
  const [profileData, setProfileData] = useState({ ...userProfile });
  const updateProfileData = (newData) => {
    setProfileData(newData);
  };
  const [userID, setUserID] = useState("");

  const setUid = (uid) => {
    updateSessionStorage(uid);
    setUserID(uid);
  };

  const updateSessionStorage = (uid) => {
    window.sessionStorage.setItem('userID', uid);
    window.sessionStorage.setItem('lastUpdateTime', new Date().getTime());
  }

  const checkSessionStorage = () => {
    if(new Date().getTime() - Number(window.sessionStorage.getItem('lastUpdateTime')) > 600000) {
      setUserID("");
    } else {
      setUserID(window.sessionStorage.getItem('userID'));
    }
  }
  
  useEffect(() => {
    checkSessionStorage();
  },[]);

  
//API fetching ratesArr// 

  const { status, ratesArr, getData } = useFxApi();

  const [message, setMessage] = useState("Loading live rates...");

  console.log(message)

  const url = `https://venturist-app.nw.r.appspot.com/currencies/GBP`;
  
  useEffect(() => {
    getData(url);
    if (status === "success") {
      try {
        setMessage("Success")
      } catch (err) {
        setMessage("Error getting rates. Please try again later");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  //API END//

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {userID && <Route path="/signin" element={<Navigate to="/wallet" replace />} />}
          {!userID && <Route path="/signin" element={<LoginPage setUid={setUid} />}></Route>}
          <Route path="/signup" element={<CreateAccountPage />}></Route>
          {(new Date().getTime() - window.sessionStorage.getItem('lastUpdateTime') <= 600000) && 
          (window.sessionStorage.getItem('userID') !== "") && (
            <>
              <Route
                path="/wallet"
                element={
                  <>
                    <NavBar setUserID={setUserID} />
                    <UserProfile userID={userID} />
                    <WalletPage
                      profileData={profileData}
                      liveRateData={ratesArr}
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
                      liveRateData={ratesArr}
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
                      ratesArr={ratesArr}
                      status={status}
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
