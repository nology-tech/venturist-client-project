import "./App.scss";
import Tiles from "./Component/Tiles/Tiles";

function App() {
  return (
    <div className="App">
      <section className="intro">
        <div>Howsit?</div>
        <div>p tags are the best</div>
        <div>Other stuff</div>
        <div>Hello,it's Lana</div>
        <div>Ollie woz ere 2k22</div>
        <div>I like this!</div>
        <div>PLEASE DONT MESS UP HG</div>
        <div>William was also here</div>
        <div>Happi is being happy :)</div>
        <div>Ebrima was here</div>
        <div>I am unhappy with the lack of testing - matt</div>
        <div>something funny</div>
      </section>
      <section className="welcome-section">
      <div>
          <Tiles />
        </div>
      </section>
    </div>
  );
}

export default App;