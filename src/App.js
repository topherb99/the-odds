import React, { Component } from "react";
import "./App.css";
import FetchData from "./components/FetchData";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App-header">
      <h1>Hello world</h1>
        <div className="Results">
          <FetchData/>
        </div>
      </div>
    );
  }
}

export default App;
