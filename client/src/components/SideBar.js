import React, { Component } from "react";
import { connect } from "react-redux";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { logout } from "../store/actions/authActions";
import { Redirect } from "react-router";

// import Signup from "../views/Signup";
// import Logout from "../views/Logout";
// import Login from "../views/Login";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    console.log(isAuthenticated);
    //return
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Menu
          // {...props}
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          onClick={this.showSettings}
        >
          <Link to="/" className="menu-item" onClick={() => this.closeMenu()}>
            Home
          </Link>
          <Link
            to="/cities"
            className="menu-item"
            onClick={() => this.closeMenu()}
          >
            Cities
          </Link>

          {isAuthenticated ? (
            <Link
              to="/"
              className="menu-item btn"
              onClick={() => {
                this.props.logout();
                this.closeMenu();
              }}
            >
              Logout{" "}
              <span>
                <strong>{user ? `Welcome ${user.name}` : ""}</strong>
              </span>
            </Link>
          ) : (
            [
              <Link
                to="/login"
                className="menu-item btn"
                onClick={() => this.closeMenu()}
              >
                Login
              </Link>,
              <Link
                to="/users"
                className="menu-item"
                onClick={() => this.closeMenu()}
              >
                Sign Up
              </Link>
            ]
          )}
        </Menu>
      </div>
      // Pass on our props
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });
export default connect(mapStateToProps, { logout })(SideBar);
