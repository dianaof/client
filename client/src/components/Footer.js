import React, { Component } from "react";
import houselogo from "./houselogo.png";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <Link to="/">
            <button className="btn-floating #e57373 red lighten-2 waves-effect waves-light page-footer">
              <img src={houselogo} alt="houselogo" width="20" />
            </button>
          </Link>
        </footer>
      </div>
    );
  }
}
export default Footer;
