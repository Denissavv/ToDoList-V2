import React, { Component } from "react";
import "../to-do-item/to-do-item.css";

export default class ToDoListItem extends Component {
  render() {
    const {
      data,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      done,
      itemColor
    } = this.props;

    let classNames = "todo-list-item";

    if (done) {
      classNames += " done";
    }
    if (itemColor) {
      classNames += " itemColor";
    }

    return (
      <div>
        <span className={classNames}>
          <span className="todo-list-item-label" onClick={onToggleDone}>
            {data}
          </span>

          <div className="button-controlls">
            <div className="">
              <button
                onClick={onToggleImportant}
                type="button"
                className="btn btn-outline-success btn-sm "
              >
                <i className="fa fa-exclamation" />
              </button>

              <button
                onClick={onDeleted}
                type="button"
                className="btn btn-outline-danger btn-sm "
              >
                <i className="fa fa-trash-o" />
              </button>
            </div>
          </div>
        </span>
      </div>
    );
  }
}
