import React, { Component } from 'react'
// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainRoutes from "./routes/index";
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <MainRoutes />
      </Router>
    )
  }
}
export default App