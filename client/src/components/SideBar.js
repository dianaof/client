import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/cities">
        Cities
      </a>

      <a className="menu-item" href="/login">
        Login
      </a>

      <a className="menu-item" href="/users">
        Sing Up
      </a>
    </Menu>
  );
};
