import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import { Navigation } from "./components/navigation";

import Home from "./pages/home";
// import About from "./pages/about";


const App = () => {
  return (
    <div>
      <Navigation />
      <Router>
        <Switch>
          {/* <Route path="/about" component={About} /> */}
          <Route path="*" component={Home} />

        </Switch>
      </Router>
    </div>
  );
};

export default App;
