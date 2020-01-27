import React from "react";
import { connect } from "react-redux";
import { fetchItineraryData } from "../store/actions/itineraryActions";
// import Activity from "./Activity";

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
        <div key={itinerary._id} className="container ">
          {/* <p className="flow-text">Available MYtineraries</p> */}
          <div className="#37474f blue-grey-text darken-3">
            <div className="card">
              <div className="card-image">
                <img src={itinerary.img} alt="" width="200" />
              </div>
              <div>
                <div className="card-content #e57373 red-text ">
                  <div className="row collection">
                    <div className="col s2">
                      <div className="collection-item avatar">
                        <i className="material-icons circle">photo</i>
                      </div>
                    </div>
                    <div className="col s10">
                      <div>{itinerary.title}</div>
                      <div className="card-content">
                        <div className="col s3">{itinerary.rating}</div>
                        <div className="col s6">{itinerary.duration}</div>
                        <div className="col s3">{itinerary.price}</div>
                      </div>
                    </div>
                    <div>{itinerary.hashtag}</div>
                  </div>

                  <div className="card-action #ef9a9a red lighten-1">
                    <div className=" #ffffff white-text">View All</div>
                    {/* <Activity /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
