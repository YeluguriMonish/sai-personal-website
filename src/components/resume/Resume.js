import React, { Component } from "react";
import Resume from "react-awesome-resume";
import "semantic-ui-css/semantic.min.css";
import "./Resume.css";
import ResumeInfo from "./ResumeInfo.js";

export default class Resumex extends Component {
  render() {
    return (
      <div className="template">
        <Resume jsonResume={ResumeInfo} theme="default" inline={true} />
      </div>
    );
  }
}
