import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Sign Up submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                className="validate"
                id="email"
                type="email"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                className="validate"
                id="password"
                type="password"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="chip row">
            <div className="input-field col s12">
              Picture
              <input
                type="file"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <input className="col s12" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default SignUp;
