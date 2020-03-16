import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../store/actions/authActions";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.props.logout} href="#">
          Logout
        </button>
      </Fragment>
    );
  }
}

export default connect(null, { logout })(Logout);
