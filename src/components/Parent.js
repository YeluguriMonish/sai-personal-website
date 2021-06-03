import React, { Component } from "react";
import Header from "./header/Header.js";
import Blog from "./blog/Blog.js";
import Home from "./home/Home.js";
import Resume from "./resume/Resume.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Parent extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
