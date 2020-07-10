import React from "react";
import Navbar from "./components/Navbar/Navbar";
import classes from "./App.module.css";
import Home from "./components/Home/Home";
import GameScreen from "./components/Game/GameScreen/GameScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppContextProvider from "./context/appContext";
function App() {
  return (
    <div className={classes.App}>
      <Router>
        <AppContextProvider>
          <div className={classes.NavBar}>
            <Navbar />
          </div>
          <div className={classes.Body}>
            <Switch>
              <Route exact path="/">
                <div className={classes.HomeWrapper}>
                  <Home />
                </div>
              </Route>
              <Route path="/game">
                <GameScreen />
              </Route>
            </Switch>
          </div>
        </AppContextProvider>
      </Router>
    </div>
  );
}

export default App;
