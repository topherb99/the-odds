import React, { Component } from "react";
import "./App.css";
import FetchFootballData from "./components/FetchFootballData";
import FetchRugbyData from "./components/FetchRugbyData";
import FetchMMAData from "./components/FetchMMAData";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App-header">
      <h1>TheOdds</h1>
        <div className="Results">
          <FetchFootballData/><FetchRugbyData/><FetchMMAData/>
        </div>
      </div>
    );
  }
}

export default App;
