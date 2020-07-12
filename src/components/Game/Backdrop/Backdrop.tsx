import React from "react";
import classes from "./Backdrop.module.css";

interface Props {
  show: boolean;
}
const Backdrop: React.FC<Props> = (props) => {
  return props.show ? <div className={classes.Backdrop}></div> : null;
};
export default Backdrop;
