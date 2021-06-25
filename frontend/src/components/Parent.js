import React, { Component } from "react";
import Header from "./header/Header.js";
import Blog from "./blog/Blog.js";
import Post from "./blog/post/Post.js";
import Category from "./blog/category/Category.js";
import Resume from "./resume/Resume.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import history from "../services/history.js";

import "./Parent.css";

export default class Parent extends Component {
  state = {
    gist: "null",
    category: "null",
  };

  cardClickHandlerBlog = (category) => {
    this.setState({ category: category }, () => {
      history.push(`/${this.state.category}`);
    });
  };

  cardClickHandlerCategory = (gist) => {
    this.setState({ gist: gist }, () => {
      history.push(`/${this.state.gist}`);
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
            <Route
              path={`/${this.state.gist}`}
              render={(props) => <Post gist={this.state.gist} />}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
