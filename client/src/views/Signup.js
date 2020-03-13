import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../store/actions/authActions";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: "",
      name: "",
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    console.log(event.target.id, event.target.value);
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      picture: this.state.picture
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="#e57373 red-text flow-text">Create Account</div>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="picture"
                type="text"
                value={this.state.picture}
                onChange={this.handleChange}
              />
              <label htmlFor="name">Picture</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                className=""
                id="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <label htmlFor="name">User Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                // className=""
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
export default connect(null, { register })(Signup);
