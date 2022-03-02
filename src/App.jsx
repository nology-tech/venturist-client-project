import "./App.scss";
import MakeTransferPage from "./components/MakeTransferPage/MakeTransferPage";
import NavBar from "./containers/NavBar/NavBar";


const App = () => {
  return (
    <div className="App">
      
      <MakeTransferPage />
      <NavBar />
      
        
    </div>
  );
}

export default App;