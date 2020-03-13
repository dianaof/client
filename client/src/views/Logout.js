import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../store/actions/authActions";
import { Link } from "react-router-dom";

export class Logout extends Component {
  render() {
    return (
      <Fragment>
        <Link onClick={this.props.logout} href="#"></Link>
        Logout
      </Fragment>
    );
  }
}

export default connect(null, { logout })(Logout);
