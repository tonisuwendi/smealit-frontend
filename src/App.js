import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./container/Auth/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
      </BrowserRouter>
    );
  }
}

export default App;
