import React from "react";
import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch />
      </Router>
    </div>
  );
}

export default App;
