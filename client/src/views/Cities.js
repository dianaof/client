import React from "react";
import { connect } from "react-redux";
import { fetchCityData } from "../store/actions/cityActions";
import { Link } from "react-router-dom";

class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  componentDidMount() {
    this.props.fetchCityData();
  }
  render() {
    const { error, isLoading, cities } = this.props;

    let filteredCityList = cities;
    console.log(cities);
    filteredCityList = filteredCityList.filter(city => {
      let cityName = city.name.toLowerCase();
      return cityName.startsWith(this.state.search.toLowerCase());
    });

    if (error) {
      return <div>Error {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="#e57373 red-text flow-text">
        <div className="nav-wrapper">
          <div className="input-field">
            <input
              className="label-icon"
              type="search"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div>
            {filteredCityList.map(city => {
              return (
                <Link key={city._id} to={"/itineraries/" + city._id}>
                  <div className="#e57373 red-text text-lighten-2 collection">
                    <div className="collection-item ">
                      {city.name} ({city.country})
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cities: state.cities.payload,
  isLoading: state.cities.isLoading,
  error: state.cities.error
});

export default connect(mapStateToProps, { fetchCityData })(Cities);
