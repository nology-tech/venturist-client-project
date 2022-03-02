import "./App.scss";
// import MakeTransferChooseRecipient from "./components/MakeTransferChooseRecipient/MakeTransferChooseRecipient";
import MakeTransferPage from "./components/MakeTransferPage/MakeTransferPage";
// import MakeTransferRecipientCard from './components/MakeTransferRecipientCard/MakeTransferRecipientCard';
import NavBar from "./containers/NavBar/NavBar";


const App = () => {
  return (
    <div className="App">
      {/* <MakeTransferRecipientCard /> */}
      {/* <MakeTransferChooseRecipient /> */}
      <MakeTransferPage />
      <NavBar />
      
        
    </div>
  );
}

export default App;