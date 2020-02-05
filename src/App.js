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
      <select>
        <option selected value="Rugby">Rugby</option>
        <option value="Football">Football</option>
        <option value="MMA">MMA</option>
      </select>
      <h1>TheOdds</h1>
        <div className="Results">
        <a href="#" class="previous round">&#8249;</a>
        <a href="#" class="next round">&#8250;</a>
          <FetchFootballData/><FetchRugbyData/><FetchMMAData/>
        </div>
      </div>
    );
  }
}

export default App;
