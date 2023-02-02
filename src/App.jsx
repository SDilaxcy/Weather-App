import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DummyData from "./assets/dummyData/cities.json";

import Home from "./Home";
import SingleWeather from "./SingleWeather";

function App() {

  useEffect(()=>{
    const data = new Response(JSON.stringify(DummyData));
  
    if ('caches' in window) {
      // Opening given cache and putting our data into it
      caches.open("dummyData").then((cache) => {
        cache.put(data);
      });
    }
  },[])

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
