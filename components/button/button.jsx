import React, { Component } from "react";
import "../button/button.css";

export default class Button extends Component {
  state = {
    label: ""
  };

  onLableChange = (element) => {
    this.setState({
      label: element.target.value
    });
  };

  onSubmit = (type) => {
    type.preventDefault();
    this.props.onAdded(this.state.label);
    this.setState({
      label: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="button-submit d-flex">
        <input
          value={this.state.label}
          className="item-add-form "
          onChange={this.onLableChange}
          placeholder="Type..."
        />

        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    );
  }
}
