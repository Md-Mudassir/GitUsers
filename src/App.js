import React, { Component } from "react";
import Navbar from "./comonents/layout/Navbar";
import Users from "./comonents/users/Users";
import axios from "axios";
import "./App.css";

class App extends Component {
  async componentDidMount() {
    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
