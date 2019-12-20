import React, { Component } from "react";
import MYtineraryLogo from "./MYtineraryLogo.png";

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
        </header>
      </div>
    );
  }
}
export default Header;
