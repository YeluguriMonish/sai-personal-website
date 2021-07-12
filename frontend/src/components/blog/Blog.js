import React, { Component } from "react";
import Card from "react-bootstrap/Card";

import "./Blog.css";

export default class Blog extends Component {
  state = {
    categories: [
      { title: "code", posts: ["java", "python"] },
      { title: "quant research", posts: ["ocamel", "haskell"] },
    ],
  };

  render() {
    return (
      <div className="list">
        {this.state.categories.map((category) => (
          <>
            <Card className="cards">
              <Card.Body>
                <Card.Title>{category.title}</Card.Title>
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
      </div>
    );
  }
}
