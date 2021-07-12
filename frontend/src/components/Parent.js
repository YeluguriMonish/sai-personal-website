import React, { Component } from "react";
import Header from "./header/Header.js";
import Blog from "./blog/Blog.js";
import Java from "./blog/post/Java.js";
import Category from "./blog/category/Category.js";
import Resume from "./resume/Resume.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import history from "../services/history.js";

import "./Parent.css";

export default class Parent extends Component {
  state = {
    category: "null",
    post: "null",
  };

  cardClickHandlerBlog = (category) => {
    this.setState({ category: category.posts }, () => {
      history.push(`/${this.state.category}`);
    });
  };

  cardClickHandlerCategory = (post) => {
    this.setState({ post: post }, () => {
      history.push(`/${this.state.post}`);
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
              render={() => <Blog handleClick={this.cardClickHandlerBlog} />}
            />
            <Route
              path={`/${this.state.category}`}
              render={(props) => (
                <Category
                  category={this.state.category}
                  handleClick={this.cardClickHandlerCategory}
                />
              )}
            />
            <Route path={"/java"} exact component={Java} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
