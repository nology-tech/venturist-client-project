import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        
      </Router>
    </div>
  );
}

export default App;