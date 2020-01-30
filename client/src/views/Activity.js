import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchActivityData } from "../store/actions/activityActions";
// import Slider from "react-slick";

class Activity extends Component {
  componentDidMount() {
    //console.log(this.props);
    //this.props.fetchActivityData(this.props.itinerary);
    // No fetch
  }
  render() {
    console.log(this.props);
    const { error, isLoading, activities } = this.props;

    let activityList = activities;
    if (error) {
      return <div>Error{error.message}</div>;
    }
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (activityList = activityList.map(activity => {
      return (
        <div key={activity._id}>
          <img src={activity.img} alt="" width="200" />
          <p>Comments</p>
          {/* <input
            className="input-field"
            type="text"
            placeholder="Your comment"
          /> */}
        </div>
      );
    }));
  }
}

const mapStateToProps = state => ({
  activities: state.activities.payload,
  isLoading: state.activities.isLoading,
  error: state.activities.error
});
export default connect(mapStateToProps, { fetchActivityData })(Activity);
