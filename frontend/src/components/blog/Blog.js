import React, { Component } from "react";
import PostDataService from "../../services/posts.js";
import Card from "react-bootstrap/Card";

import "./Blog.css";

export default class Blog extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    PostDataService.getAll().then((response) => {
      this.setState({ posts: response.data.posts });
    });
  };

  render() {
    return (
      <div className="list">
        {this.state.posts.map((post) => (
          <>
            <Card className="cards">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.text.slice(0, 1500)}</Card.Text>
                <a
                  href="#"
                  class="stretched-link"
                  onClick={() => {
                    this.props.handleClick(post.title);
                  }}
                ></a>
              </Card.Body>
            </Card>
          </>
        ))}
      </div>
    );
  }
}
