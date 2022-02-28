import "./App.scss";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <section className="intro">
        <div className="currency-flag currency-flag-usd"></div>
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
        <div>
          
        </div>
      </section>
      <Button buttonName="Best button ever" buttonStyle="white" buttonFunction={() => alert("yo i been pressed")} />
    </div>
  );
}

export default App;