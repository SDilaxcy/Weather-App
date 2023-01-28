import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import SingleWeather from "./SingleWeather";

function App() {
  return (
    <Router basename={"/"}>
      <Switch>
        <Route exact path={`/`} component={Home} />
        <Route exact path={`/SingleWeather`} component={SingleWeather} />
      </Switch>
    </Router>
  );
}

export default App;
