import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import { MyFirstGrid } from "./component/MyFirstGrid";
import { ResponsiveGrid } from "./component/ResponsiveGrid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ResponsiveGrid />
      </div>
    );
  }
}

export default App;
