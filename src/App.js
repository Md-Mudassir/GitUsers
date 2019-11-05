import React, { Component } from "react";
import Navbar from "./comonents/layout/Navbar";
import Users from "./comonents/users/Users";
import Search from "./comonents/users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.Client_ID}&client_secret=${process.env.Client_Secret}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  //search github users
  searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.Client_ID}&client_secret=${process.env.Client_Secret}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
