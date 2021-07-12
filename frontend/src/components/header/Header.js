import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import github from "./GitHub-Mark-Light-120px-plus.png";
import linkedin from "./linkedin-128.png";

import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">SC</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="blog">Blog</Nav.Link>
          </Nav>
          <Navbar.Brand>
            {" "}
            <a href="https://github.com/YeluguriMonish">
              <img
                src={github}
                alt="github icon"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </a>
          </Navbar.Brand>
          <Navbar.Brand>
            <a href="https://www.linkedin.com/">
              <img
                src={linkedin}
                alt="linked icon"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </a>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
