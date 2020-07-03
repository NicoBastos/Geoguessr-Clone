import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Logo from "../../static/geoguesser_icon.svg";
import { Redirect, Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className={classes.NavBar}>
      <div className={classes.Logo}>
        <a href="/">
          <img alt="logo" src={Logo} />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
