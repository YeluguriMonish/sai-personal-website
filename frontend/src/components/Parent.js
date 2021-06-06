import React, { Component } from "react";
import Header from "./header/Header.js";
import Blog from "./blog/Blog.js";
import Resume from "./resume/Resume.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import "./Parent.css";

export default class Parent extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact component={Resume} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
