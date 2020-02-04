import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchActivityData } from "../store/actions/activityActions";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

class Activity extends Component {
  componentDidMount() {
    //console.log(this.props);
    //this.props.fetchActivityData(this.props.itinerary);
    // No fetch
  }
  render() {
    console.log(this.props);
    const { error, isLoading, activities } = this.props;

    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    let activityList = activities;

    if (error) {
      return <div>Error{error.message}</div>;
    }
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (activityList = activityList.map(activity => {
      return (
        <Slider {...settings} key={activity._id}>
          <div className="#ef9a9a red-text lighten-3">
            {activity.title}
            <img src={activity.img} alt="" width="200" />
          </div>

          {/* <form onSubmit={}>
            <input
              className="input-field"
              type="text"
              placeholder="Your comment" onChange={}
            />
          </form> */}
        </Slider>
      );
    }));
  }
}

export default Activity;
