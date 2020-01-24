import React from "react";
import { connect } from "react-redux";
import { fetchItineraryData } from "../store/actions/itineraryActions";

class Itinerary extends React.Component {
  componentDidMount() {
    this.props.fetchItineraryData(this.props.match.params.city_id);
  }
  render() {
    console.log(this.props);
    const { error, isLoading, itineraries } = this.props;

    let itineraryList = itineraries;
    if (error) {
      return <div>Error {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (itineraryList = itineraryList.map(itinerary => {
      return (
        <div key={itinerary._id}>
          {itinerary.title}, {itinerary.img}, {itinerary.rating},
          {itinerary.duration}, {itinerary.price}, {itinerary.hashtag}
        </div>
      );
    }));

    // return <div>itinerary page city</div>;
  }
}

const mapStateToProps = state => ({
  itineraries: state.itineraries.payload,
  isLoading: state.itineraries.isLoading,
  error: state.itineraries.error
});
export default connect(mapStateToProps, { fetchItineraryData })(Itinerary);
