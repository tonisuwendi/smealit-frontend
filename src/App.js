import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./container/Auth/Login";
import Home from "./container/Home/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    );
  }
}

export default App;
