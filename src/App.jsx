import "./App.scss";
import Currency from "./components/Currency/Currency";
import TransferPage from "./components/TransferPage/TransferPage";

function App() {

  return (
    <div className="App">
      <TransferPage />
      <Currency />
      {/* <Header h5={"Convert"} h1={"Currency Converter"}/> */}
      <section className="intro">
        <div className="currency-flag currency-flag-usd"></div>
      </section>
    </div>
  );
}

export default App;
