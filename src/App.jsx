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
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import contactData from "./assets/data/contactExample";
import HomePage from "./containers/HomePage/HomePage";
import LoginPage from "./containers/LoginPage/LoginPage";
import CreateAccountPage from "./containers/CreateAccountPage/CreateAccountPage";
import ErrorPage from "./containers/404Page/404Page";
import useFxApi from "./Hooks/FX/useFxApi";

const App = () => {
  const [profileData, setProfileData] = useState(false);
  const [userID, setUserID] = useState(false);
  const [userHoldings,setUserHoldings] = useState(false);
  const [userBankAccounts,setUserBankAccounts] = useState(false);

  const setUid = (uid) => {
    updateSessionStorage(uid);
    setUserID(uid);
  };

  const updateSessionStorage = (uid) => {
    window.sessionStorage.setItem('userID', uid);
    window.sessionStorage.setItem('lastUpdateTime', new Date().getTime());
  }

  // Data persistence //
  const checkSessionStorage = () => {
    if(new Date().getTime() - Number(window.sessionStorage.getItem('lastUpdateTime')) > 600000) {
      setUserID(false);
    } else {
      setUserID(window.sessionStorage.getItem('userID'));
    }
  }

  // API fetching user data //
  const getUserData = async () => {
    await fetch(`https://venturist-app.nw.r.appspot.com/user/${userID}`)
      .then(response => response.json())
      .then(data => setProfileData(data))
      .catch(error => alert(error));

    await fetch(`https://venturist-app.nw.r.appspot.com/user-holding/${userID}`)
      .then(response => response.json())
      .then(data => setUserHoldings(data))
      .catch(error => alert(error));

    await fetch(`https://venturist-app.nw.r.appspot.com/user-bank-account/${userID}`)
      .then(response => response.json())
      .then(data => setUserBankAccounts(data))
      .catch(error => alert(error));
  
  }

  const clearData = () => {
    setUid("");
    setProfileData(false);
    setUserHoldings(false);
  }
  
  useEffect(() => {
    checkSessionStorage();
    if (userID) getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userID]);

  
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
                    <NavBar clearData={clearData} />
                    <UserProfile profileData={profileData} />
                    <WalletPage userHoldings={userHoldings}/>
                  </>
                }
              ></Route>
              <Route
                path="/liverates"
                element={
                  <>
                    <NavBar clearData={clearData} />
                    <UserProfile profileData={profileData} />
                    <LiveRatesPage />
                  </>
                }
              ></Route>
              <Route
                path="/convert"
                element={
                  <>
                    <NavBar clearData={clearData} />
                    <UserProfile profileData={profileData} />
                    <ConvertPage liveRateData={ratesArr} profileData={profileData} userHoldings={userHoldings} getUserData={getUserData} />
                  </>
                }
              ></Route>
              <Route
                path="/transfer"
                element={
                  <>
                    <NavBar clearData={clearData} />
                    <UserProfile profileData={profileData} />
                    <MakeTransferPage liveRateData={ratesArr} profileData={profileData} contactData={contactData} userBankAccounts={userBankAccounts} />
                  </>
                }
              ></Route>
              <Route
                path="/contacts"
                element={
                  <>
                    <NavBar clearData={clearData} />
                    <UserProfile profileData={profileData} />
                    <ContactsPage userID={userID}/>
                  </>
                }
              ></Route>
              <Route
                path="/deposit"
                element={
                  <>
                    <NavBar clearData={clearData} />
                    <UserProfile profileData={profileData} />
                    <DepositPage profileData={profileData} userHoldings={userHoldings} userBankAccounts={userBankAccounts} />
                  </>
                }
              ></Route>
              <Route
                path="/withdraw"
                element={
                  <>
                    <NavBar clearData={clearData} />
                    <UserProfile profileData={profileData} />
                    <WithdrawPage profileData={profileData} userHoldings={userHoldings} userBankAccounts={userBankAccounts} />
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
