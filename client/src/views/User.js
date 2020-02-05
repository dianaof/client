import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: "",
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
                className="validate"
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
                className="validate"
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
                className="validate"
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <label htmlFor="name">Password</label>
            </div>
          </div>
          <div className="col 12">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default User;
