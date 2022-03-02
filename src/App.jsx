import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import MakeTransferForm from "./components/MakeTransferForm/MakeTransferForm";


const App = () => {
  return (
    <div className="App">
      <NavBar /> 
      <MakeTransferForm />
    </div>
  );
}

export default App;