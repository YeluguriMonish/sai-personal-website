import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class Post extends Component {
  state = {
    posts: this.props.category,
  };

  render() {
    return (
      <div className="list">
        {this.state.posts.map((post) => (
          <>
            <Card className="cards">
              <Card.Body>
                <Card.Title>{post}</Card.Title>
                <a
                  href="#"
                  class="stretched-link"
                  onClick={() => {
                    this.props.handleClick(post);
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
