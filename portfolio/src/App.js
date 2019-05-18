import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Home />
        <Switch>
          <Route path="/" exact={true} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
