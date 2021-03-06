import React, { Component } from "react";
import "../filter-buttons/filter-buttons.css";

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" }
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? "btn-info" : "btn-outline-secondary";
      return (
        <div>
          <button
            key={name}
            onClick={() => onFilterChange(name)}
            type="button"
            className={`btn ${clazz}`}
          >
            {label}
          </button>
        </div>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
