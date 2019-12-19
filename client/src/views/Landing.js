import React, { Component } from "react";
import circlearrow from "./circlearrow.png";
class Landing extends Component {
  render() {
    return (
      <div>
        <blockquote>
          <p className="#80cbc4 teal lighten-3-text-lighten-2">
            Find your perfect trip, designed by insiders who know and love their
            cities.
          </p>
        </blockquote>
        <blockquote>
          <p>Start browsing</p>
        </blockquote>
        <img src={circlearrow} alt="circlearrow" width="80" />
        <blockquote>
          <p>Want to build your own MYitinerary?</p>
        </blockquote>
        <div className="container">
          <div className="row">
            <div className="col s6">
              <label>Log in</label>
            </div>
            <div className="col s6">
              <label>Create Account</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
