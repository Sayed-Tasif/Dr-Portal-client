import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddDoctor from "./components/AddDoctor/AddDoctor";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path='/appointment/dashboard'>
          <Dashboard></Dashboard>
        </Route>
        <Route path='/appointment'>
          <Appointment></Appointment>
        </Route>
        <Route path='/addDoctor'>
          <AddDoctor></AddDoctor>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
