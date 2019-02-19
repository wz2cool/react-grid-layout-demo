import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import { MyFirstGrid } from "./component/MyFirstGrid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyFirstGrid />
      </div>
    );
  }
}

export default App;
