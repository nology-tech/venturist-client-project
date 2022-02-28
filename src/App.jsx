import "./App.scss";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="intro">
        <div className="currency-flag currency-flag-usd"></div>
      </section>
    </div>
  );
}

export default App;
