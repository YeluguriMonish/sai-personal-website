import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";

import "./Resume.css";

export default class Resume extends Component {
  state = { activeItem: "bio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
      <Grid>
        <Grid.Column width={4} className="tab">
          <Menu fluid vertical tabular>
            <Menu.Item
              name="bio"
              active={activeItem === "bio"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="pics"
              active={activeItem === "pics"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="companies"
              active={activeItem === "companies"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="links"
              active={activeItem === "links"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the
            tab height
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
