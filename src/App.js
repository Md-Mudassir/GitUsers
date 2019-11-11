import React, { Fragment } from "react";
import Navbar from "./comonents/layout/Navbar";
import Users from "./comonents/users/Users";
import User from "./comonents/users/User";
import Search from "./comonents/users/Search";
import About from "./comonents/pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./context/github/GithubState";
import "./App.css";

const App = () => {
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
                render={() => (
                  <Fragment>
                    <Search />
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
