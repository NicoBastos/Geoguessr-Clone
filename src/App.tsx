import React from "react";
import Navbar from "./components/Navbar/Navbar";
import classes from "./App.module.css";
import Home from "./components/Home/Home";
import GameScreenTest from "./components/Game/GameScreen/GameScreenTest";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppContextProvider from "./context/appContext";
import SocketContextProvider from "./context/socketContext";
function App() {
  return (
    <div className={classes.App}>
      <Router>
        <AppContextProvider>
          <SocketContextProvider>
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
                  <GameScreenTest />
                </Route>
              </Switch>
            </div>
          </SocketContextProvider>
        </AppContextProvider>
      </Router>
    </div>
  );
}

export default App;
