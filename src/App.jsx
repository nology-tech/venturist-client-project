import "./App.scss";
import Tiles from "./Component/Tiles/Tiles";
import WelcomeTiles from "./Component/WelcomeTiles/WelcomeTiles";

function App() {
  return (
    <div className="App">
     
      <section className="welcome-section">
      <div>
          <WelcomeTiles />
        </div>
      </section>
    </div>
  );
}

export default App;