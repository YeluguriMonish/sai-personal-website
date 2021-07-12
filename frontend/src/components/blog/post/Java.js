import React, { Component } from "react";
import CodeBlock from "./code-block/CodeBlock.js";
import "./Post.css";

export default class Post extends Component {
  state = {
    text: `class HelloMessage extends React.Component {
  handlePress = () => {
    alert('Hello')
  }
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
        <button onClick={this.handlePress}>Say Hello</button>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />, 
  mountNode 
);`,
    language: "jsx",
  };
  render() {
    return (
      <div className="post">
        <h1>Jsx Example</h1>
        <p1>here is how you code</p1>
        <CodeBlock
          code={this.state.text}
          language={this.state.language}
          showLineNumbers={true}
          startingLineNumber="1"
        />
        <p1>wow so good</p1>
      </div>
    );
  }
}
