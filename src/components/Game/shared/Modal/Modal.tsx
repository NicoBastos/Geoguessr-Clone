import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
interface Props {
  show: boolean;
}
class Modal extends React.Component<Props> {
  shouldComponentUpdate(nextProps: any, nextState: any) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
