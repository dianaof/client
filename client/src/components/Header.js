import React, { Component } from "react";
import MYtineraryLogo from "./MYtineraryLogo.png";
// import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          {/* <Navbar /> */}
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
