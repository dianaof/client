import React, { Component } from "react";
import { Link } from "react-router-dom";
import circlearrow from "./circlearrow.png";

class Landing extends Component {
  render() {
    return (
      <div>
        <div>
          <p className="#e57373 red-text text-lighten-2">
            Find your perfect trip, designed by insiders who know and love their
            cities.
          </p>
        </div>
        <div className="#e57373 red-text text-lighten-2 flow-text">
          <p>Start browsing</p>
          <Link to="/cities">
            <img
              className="circlearrow"
              src={circlearrow}
              alt="circlearrow"
              width="80"
            />
          </Link>
        </div>
        <div className="#e57373 red-text text-lighten-2">
          <p>Want to build your own MYitinerary?</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s6">
              <Link to="/login">
                <label className="#e57373 red-text flow-text">Log in</label>
              </Link>
            </div>
            <div className="col s6">
              <Link to="/users">
                <label className="#e57373 red-text flow-text">
                  Create Account
                </label>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
