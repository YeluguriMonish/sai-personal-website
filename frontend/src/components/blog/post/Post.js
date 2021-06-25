import React, { Component } from "react";
import PostDataService from "../../../services/posts.js";
import Gist from "react-gist";

import "./Post.css";

export default class Post extends Component {
  state = {
    title: "",
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    PostDataService.find(this.props.gist).then((response) => {
      this.setState({ title: response.data.posts[0].title });
    });
  };

  render() {
    return (
      <div className="post">
        <Gist id={this.props.gist} />
      </div>
    );
  }
}
