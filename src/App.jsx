import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import ConvertPage from "./containers/ConvertPage/ConvertPage";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ConvertPage />
    </div>
  );
};

export default App;
