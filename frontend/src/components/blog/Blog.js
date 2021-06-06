import React, { Component } from "react";
import PostDataService from "../../services/posts.js";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
      console.log(this.state.posts);
    });
  };

  render() {
    return (
      <div className="list">
        {this.state.posts.map((post) => (
          <>
            <Card className="cards" bg="dark">
              <Button variant="success" className="no-transition">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.text.slice(0, 1500)}</Card.Text>
                </Card.Body>
              </Button>
            </Card>
          </>
        ))}
      </div>
    );
  }
}
