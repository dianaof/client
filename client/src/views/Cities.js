import React, { Component } from "react";
// import M from "materialize-css";

class Cities extends Component {
  constructor(props) {
    super();
    this.state = {
      cityList: []
    };
  }
  async componentDidMount() {
    const response = await fetch(`http://localhost:5000/cities/all`);
    const request = await response.json();
    this.setState({
      cityList: request
    });
    console.log(request);
  }

  render() {
    let { cityList } = this.state;
    // let cityList = this.state.cityList;
    return (
      <div>
        {cityList.map(city => {
          return (
            <div key={city._id}>
              {city.name}, {city.country}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Cities;
