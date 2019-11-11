import React from "react";
import Navbar from "./comonents/layout/Navbar";
import User from "./comonents/users/User";
import About from "./comonents/pages/About";
import Home from "./comonents/pages/Home";
import NotFound from "./comonents/pages/NotFound";
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
              <Route exact path="/" component={Home} />
              <Route exact path="/user/:login" component={User} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} /> 
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
