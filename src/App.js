import React, { Component } from "react";
import Navbar from "./comonents/layout/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github Users Finder" icon="fab fa-github" />
      </div>
    );
  }
}

export default App;
