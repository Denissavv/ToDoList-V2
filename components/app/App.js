import "../app/app.css";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ToDoList from "../to-do-list/to-do-list";
import { Component } from "react";
import Button from "../button/button";
import ItemStatusFilter from "../filter-buttons/filter-buttons";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createToDoItem("Drink coffee"),
      this.createToDoItem("Make a task ad home"),
      this.createToDoItem("Clean my room")
    ],
    term: "",
    filter: "all"
  };

  createToDoItem(data) {
    return {
      data,
      itemColor: false,
      done: false,
      id: this.maxId++
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      };
    });
  };

  AddItem = (text) => {
    const newItem = this.createToDoItem(text);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      };
    });
  };
  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "itemColor")
      };
    });
  };

  SearchItem(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.data.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  onSearchChange = (term) => {
    this.setState({ term });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  render() {
    const { todoData, term, filter } = this.state;

    const visibleItems = this.filter(this.SearchItem(todoData, term), filter);

    const doneCount = todoData.filter((el) => el.done).length;

    const todoCount = todoData.length - doneCount;

    return (
      <div className="App">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="d-flex">
          <SearchPanel />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <ToDoList
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          todos={visibleItems}
          onDeleted={this.deleteItem}
        />

        <Button onAdded={this.AddItem} />
      </div>
    );
  }
}
