import React from "react";
import "../app-header/app-header.css";

function AppHeader({ toDo, done }) {
  return (
    <div className="app-header d-flex">
      <h1>My ToDo list</h1>
      <p>
        {toDo} more to do, {done} done
      </p>
    </div>
  );
}

export default AppHeader;
