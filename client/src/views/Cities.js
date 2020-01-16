import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCityData } from "../store/actions/cityActions";
// import M from "materialize-css";

// class Cities extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cityList: [],
//       search: ""
//     };
//   }
//   handleChange = e => {
//     this.setState({
//       search: e.target.value
//     });
//     //this.props.onChange(e.target.value);
//   };
//   async componentDidMount() {
//     const response = await fetch(`http://localhost:5000/cities/all`);
//     const request = await response.json();
//     this.setState({
//       cityList: request
//     });
//     console.log(request);
//   }

//   render() {
//     // let { cityList } = this.state;
//     let filteredCityList = this.state.cityList;

//     filteredCityList = filteredCityList.filter(city => {
//       let cityName = city.name.toLowerCase();
//       return cityName.startsWith(this.state.search.toLowerCase());
//     });

//     return (
//       <div>
//         <div>
//           <input
//             type="search"
//             placeholder="Search..."
//             value={this.state.search}
//             onChange={this.handleChange.bind(this)}
//           />
//         </div>

//         {filteredCityList.map(city => {
//           return (
//             <div key={city._id}>
//               {city.name}, {city.country}
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
// export default Cities;

class CitiesList extends React.Component {
  componentDidMount() {
    this.props.fetchCityData();
  }
  render() {
    const { error, cities } = this.props;

    if (error) {
      return <div>Error {error.message}</div>;
    }
    return (
      <div>
        {cities.map(city => {
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
const mapStateToProps = state => ({
  cities: state.cities,

  error: state.cities.error
});

export default connect(mapStateToProps, { fetchCityData })(CitiesList);
