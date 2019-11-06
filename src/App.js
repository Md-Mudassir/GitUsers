import React, { Component, Fragment } from "react";
import Navbar from "./comonents/layout/Navbar";
import Users from "./comonents/users/Users";
import User from "./comonents/users/User";
import Search from "./comonents/users/Search";
import About from "./comonents/pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    user: {},
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

  //Get user
  getUser = async username => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?${username}?client_id=${process.env.Client_ID}&client_secret=${process.env.Client_Secret}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    const { users, user, loading } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/user/:login"
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
