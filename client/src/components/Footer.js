import React, { Component } from "react";
import houselogo from "./houselogo.png";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <button>
            <img src={houselogo} alt="houselogo" width="20" />
          </button>
        </footer>
      </div>
    );
  }
}
export default Footer;
