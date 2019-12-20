import React, { Component } from "react";
import houselogo from "./houselogo.png";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <Link to="/">
            <button>
              <img src={houselogo} alt="houselogo" width="20" />
            </button>
          </Link>
        </footer>
      </div>
    );
  }
}
export default Footer;
