import React, { Component } from "react";
import MYtineraryLogo from "./MYtineraryLogo.png";

import Logout from "../views/Logout";
class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <img
            className="mytinerarylogo"
            src={MYtineraryLogo}
            alt="Logo"
            width="250"
          />
          <Logout />
        </header>
      </div>
    );
  }
}
export default Header;
