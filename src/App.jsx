import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        
        <section className="intro">
        </section>
      </Router>
    </div>
  );
}

export default App;