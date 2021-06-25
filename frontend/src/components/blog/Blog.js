import React, { Component } from "react";
import PostDataService from "../../services/posts.js";
import Card from "react-bootstrap/Card";

import "./Blog.css";

export default class Blog extends Component {
  state = {
    posts: [],
    categories: [],
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    PostDataService.getAll().then((response) => {
      this.setState({ posts: response.data.posts });
      this.generateCategories();
    });
  };

  generateCategories = () => {
    let categories = [];
    this.state.posts.map((post) => categories.push(post.category));

    let uniqueCategories = categories.filter((c, index) => {
      return categories.indexOf(c) === index;
    });
    console.log(uniqueCategories);

    this.setState({ categories: uniqueCategories });
  };

  render() {
    return (
      <div className="list">
        <Card>
          <Card.Body>
            <Card.Title>Categories</Card.Title>
            {this.state.categories.map((category) => (
              <>
                <Card className="cards">
                  <Card.Body>
                    <Card.Title>{category}</Card.Title>
                    <a
                      href="#"
                      class="stretched-link"
                      onClick={() => {
                        this.props.handleClick(category);
                      }}
                    ></a>
                  </Card.Body>
                </Card>
              </>
            ))}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
