import React, { useState, Fragment } from "react";
import Navbar from "./comonents/layout/Navbar";
import Users from "./comonents/users/Users";
import User from "./comonents/users/User";
import Search from "./comonents/users/Search";
import About from "./comonents/pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./context/github/GithubState";
import "./App.css";

const App = () => {
  const [setAlert] = useState(null);

  //Alert
  const showAlert = msg => {
    setAlert({ msg });
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
              <Route exact path="/user/:login" component={User} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
