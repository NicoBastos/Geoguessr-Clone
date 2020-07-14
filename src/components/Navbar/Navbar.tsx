import React from "react";
import classes from "./Navbar.module.css";
import Logo from "../../static/geoguesser_icon.svg";

const Navbar: React.FC = () => {
  return (
    <header className={classes.NavBar}>
      <div className={classes.Logo}>
        <a href="/">
          <img alt="logo" src={Logo} />
        </a>
      </div>
      <p className={classes.Title}>Geoguessr-Clone</p>
    </header>
  );
};

export default Navbar;
