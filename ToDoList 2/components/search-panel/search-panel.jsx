import React, { Component } from "react";

import "../search-panel/search-panel.css";

export default class SearchPanel extends Component {
  state = {
    term: ""
  };

  onSearchChange = (event) => {
    const term = event.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={this.state.term}
              onChange={this.onSearchChange}
            />
          </form>
        </div>
      </nav>
    );
  }
}
