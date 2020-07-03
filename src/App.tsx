import React from "react";
import Navbar from "./components/Navbar/Navbar";
import classes from "./App.module.css";
import Home from "./components/Home/Home";
import GameScreen from "./components/Game/GameScreen/GameScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className={classes.App}>
      <Router>
        <div className={classes.NavBar}>
          <Navbar />
        </div>
        <div className={classes.Body}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/game">
              <GameScreen />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
