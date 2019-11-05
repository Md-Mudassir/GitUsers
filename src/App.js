import React, { Component } from "react";
import Navbar from "./comonents/layout/Navbar";
import UserItem from "./comonents/users/UserItem";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
