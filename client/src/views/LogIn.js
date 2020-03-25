import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../store/actions/authActions";
import { clearErrors } from "../store/actions/errorActions";
import { Redirect } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.id, event.target.value);
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.login(this.state);
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    console.log(isAuthenticated);

    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="row">
        <div className="#e57373 red-text flow-text">Login</div>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                className=""
                id="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <label htmlFor="name">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                className=""
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <label htmlFor="name">Password</label>
            </div>
          </div>
          <div className="input-field col 12">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
  error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(Login);
