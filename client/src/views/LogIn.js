import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
      // errorMail: "",
      // errorPassword:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange=()=>{this.setState({ [event.target.id]: event.target.value });}

  handleChange(event) {
    // console.log(event.target.id, event.target.value);
    this.setState({ [event.target.id]: event.target.value });
  }

  // handleSubmit=()=>{event.preventDefault()};

  handleSubmit(event) {
    event.preventDefault();

    //   axios
    //     .post(`http://localhost:5000/login/`, {
    //       email: this.state.email,
    //       password: this.state.password
    //     })
    //     .then(res => {
    //       console.log(res);
    //       console.log(res.data);
    //     });
  }

  // componentDidMount() {}

  render() {
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
          <div className="col 12">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
