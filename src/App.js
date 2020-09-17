// Core react imports
import React from "react";
// Routing imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Component imports
import FAQ from "./components/FAQ";
import CONTACT from "./components/CONTACT";
import LANDING from "./components/LANDING";
// Css imports
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// Main functional component
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route path="/contact">
          <CONTACT />
        </Route>
        <Route path="/">
          <LANDING />
        </Route>
      </Switch>
    </Router>
  );
}
// Exporting main functional component
export default App;
