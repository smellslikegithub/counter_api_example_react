import logo from "./logo.svg";
import React, { useState } from "react";
import Counter from "./Components/Counter";
import UserData from "./Components/UserData";
import "./App.css";

function App() {
  const [timesClicked, setCount] = useState(0);
  const [userDataPrompt, setUserData] = useState(false);
  return (
    <div className="App">
      <div>
        <h1 style={headingStyle}>This Is the Counter APP</h1>

        <div style={{ clear: "both" }}>
          <button
            style={buttonPrimary}
            onClick={() => {
              setCount(timesClicked + 1);
              //console.log(timesClicked);
            }}
          >
            Press Me To Increment!!
          </button>

          <button
            style={buttonReset}
            onClick={() => {
              setCount(0);
            }}
          >
            Reset Counter
          </button>

          <button
            onClick={() => {
              setUserData(true);
            }}
          >
            Fetch User Data
          </button>
        </div>
        <div>
          <Counter propsTimesClicked={timesClicked} />
        </div>

        <div id="userData">
          <UserData userDataPrompt={userDataPrompt} />
        </div>
      </div>
    </div>
  );
}

const headingStyle = {
  fontSize: 40,
  color: "#FFFFFF",
};

const buttonPrimary = {
  backgroundColor: "#4CAF50",
};
const buttonReset = {
  backgroundColor: "#4876ea",
};

export default App;
