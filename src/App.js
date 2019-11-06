import React, { Component } from "react";
import Navbar from "./comonents/layout/Navbar";
import Users from "./comonents/users/Users";
import Search from "./comonents/users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
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
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.Client_ID}&client_secret=${process.env.Client_Secret}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  //clear users
  clearUsers = () => this.setState({ users: [], loading: false });

  //Alert
  setAlert = msg => {
    this.setState({ alert: { msg } });
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
