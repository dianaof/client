import React, { Component } from "react";

class Activity extends Component {
  render() {
    return (
      <div>
        Activity Activity Activity Activity
        <div>
          <p>Comments</p>
          <input
            className="input-field"
            type="text"
            placeholder="Your comment"
          />
        </div>
      </div>
    );
  }
}
export default Activity;
