import React from "react";
import { connect } from "react-redux";
import { fetchItineraryData } from "../store/actions/itineraryActions";
import { fetchActivityData } from "../store/actions/activityActions";
// import{fetchComment} from "../store/actions/commentActions"
import Activity from "./Activity";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Comment from "../components/Comment";

class Itinerary extends React.Component {
  componentDidMount() {
    this.props.fetchItineraryData(this.props.match.params.city_id);
    this.props.fetchActivityData(this.props.match.params.city_id);
    //this.props.fetchComment(this.props.match.itinerary_id);
  }
  componentDidUpdate() {
    var elems = document.querySelectorAll(".collapsible");
    console.log(elems);

    M.Collapsible.init(elems, {});
  }
  render() {
    console.log(this.props);
    const {
      error,
      isLoading,
      itineraries,
      activities
      //, comments
    } = this.props;

    let itineraryList = itineraries;
    if (error) {
      return <div>Error {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <ul className="collapsible">
        {itineraryList.map((itinerary, i) => {
          return (
            <li key={itinerary._id} className="container ">
              {/* <p className="flow-text">Available MYtineraries</p> */}
              <div className="#37474f blue-grey-text darken-3">
                <div className="card">
                  <div className="card-image">
                    <img
                      src={itinerary.img}
                      alt=""
                      //  width="100" height="133"
                    />
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
                          {itinerary.title}
                          <div className=" card-content">
                            <div className="col s4">{itinerary.rating}</div>
                            <div className="col s4">{itinerary.duration}</div>
                            <div className="col s2">{itinerary.price}</div>
                          </div>
                        </div>
                      </div>
                      <div>{itinerary.hashtag}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapsible-header #ef9a9a red lighten-3  #ffffff white-text">
                View All
              </div>
              <div className="collapsible-body">
                <Activity
                  activities={activities.filter(
                    activity => activity.itinerary_id === itinerary._id
                  )}
                />
                <Comment itineraryID={itinerary._id} />
              </div>
            </li>
          );
        })}
      </ul>
    );

    // return <div>itinerary page city</div>;
  }
}

const mapStateToProps = state => ({
  itineraries: state.itineraries.payload,
  activities: state.activities.payload,
  isLoading: state.itineraries.isLoading,
  error: state.itineraries.error
  //comments: state.comments.payload
});
export default connect(mapStateToProps, {
  fetchItineraryData,
  fetchActivityData
  //fetchComment
})(Itinerary);
