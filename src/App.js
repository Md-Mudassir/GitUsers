import React, { useState, Fragment } from "react";
import Navbar from "./comonents/layout/Navbar";
import Users from "./comonents/users/Users";
import User from "./comonents/users/User";
import Search from "./comonents/users/Search";
import About from "./comonents/pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import GithubState from "./context/github/GithubState";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.Client_ID}&client_secret=${process.env.Client_Secret}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  //clear users

  //Alert
  const showAlert = msg => {
    setAlert({ msg });
  };

  //get repos
  const getUserRepos = async username => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.Client_ID}&client_secret=${process.env.Client_Secret}`
    );

    setRepos(res.data);
    setLoading(false);
  };

  return (
    <GithubState>
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
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/user/:login"
                render={props => (
                  <User {...props} getUserRepos={getUserRepos} repos={repos} />
                )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
