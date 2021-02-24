import React, { Component } from "react";
import HeaderBar from "./headerbar";

class LoginWindow extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <HeaderBar></HeaderBar>
        <p>My good, my bad!</p>
      </React.Fragment>
    );
  }
}

export default LoginWindow;
