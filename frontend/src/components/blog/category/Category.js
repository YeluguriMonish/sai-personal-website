import React, { Component } from "react";
import PostDataService from "../../../services/posts.js";
import Card from "react-bootstrap/Card";

export default class Post extends Component {
  state = {
    title: "",
    posts: [],
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    PostDataService.find(this.props.category, "category").then((response) => {
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
                <a
                  href="#"
                  class="stretched-link"
                  onClick={() => {
                    this.props.handleClick(post.gist);
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
