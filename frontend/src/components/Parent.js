import React, { Component } from "react";
import Header from "./header/Header.js";
import Blog from "./blog/Blog.js";
import Post from "./blog/post/Post.js";
import Resume from "./resume/Resume.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import history from "../services/history.js";

import "./Parent.css";

export default class Parent extends Component {
  state = {
    postId: "",
  };

  cardClickHandler = (id) => {
    this.setState({ postId: id }, () => {
      history.push("/post");
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact component={Resume} />
            <Route
              path="/blog"
              render={() => <Blog handleClick={this.cardClickHandler} />}
            />
            <Route
              path="/post"
              render={(props) => <Post id={this.state.postId} />}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
