import "./App.scss";
import UserProfile from "./components/UserProfile/UserProfile";
import NavBar from "./containers/NavBar/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <UserProfile />
    </div>
  );
};

export default App;
