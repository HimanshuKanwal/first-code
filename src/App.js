import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
// import a4 from "./Images/4.jpg";

// import Test from "./Component/Test";
import Meme from "./Component/Meme";
// import Test2 from "./Component/Test2";
// import Md from "./Component/Md";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Header />
      <Meme />
      {/* <Md /> */}
      {/* <Test /> */}
      {/* <Test2 /> */}
    </div>
  );
}

export default App;
