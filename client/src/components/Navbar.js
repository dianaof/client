import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import Signup from "../views/Signup";
import Logout from "../views/Logout";
import Login from "../views/Login";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  //   static PropTypes = {
  //     auth: PropTypes.object.isRequired
  //   };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <Fragment>
        <li>
          <span>
            <strong>{user ? `Welcome ${user.name}` : ""}</strong>
          </span>
        </li>
        <li>
          <Logout />
        </li>
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        <li>
          <Signup />
        </li>
        <li>
          <Login />
        </li>
      </Fragment>
    );

    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <ul className="left hide-on-med-and-down" onClick={this.toggle}>
              <a
                href="/"
                className=" #e57373 red-text text-lighten-2"
                isOpen={this.state.isOpen}
              >
                {isAuthenticated ? authLinks : guestLinks}
              </a>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });
export default connect(mapStateToProps, null)(Navbar);
