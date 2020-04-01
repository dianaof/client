import React, { Component } from "react";
import { connect } from "react-redux";
import {
  // fetchComment,
  postComment,
  fetchGetComment
} from "../store/actions/commentActions";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      comment: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchGetComment(this.props.itineraryID);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.postComment({
      // comments: this.state.comments,
      comment: this.state.comment,
      username: this.props.auth.user.name,
      itinerary_id: this.props.itineraryID
    });
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { comments } = this.props;
    let commentsList = comments;
    console.log(this.props);

    return (
      <div>
        {
          (commentsList = commentsList.payload
            .filter(comment => comment.itinerary_id === this.props.itineraryID)
            .map(comment => {
              return (
                <div className="row collection" key={comment._id}>
                  <div className="col s8 collection-item">
                    {comment.comment}
                  </div>
                  <div className="col s4 collection-item">
                    ({comment.username})
                  </div>
                </div>
              );
            }))
        }
        {isAuthenticated ? (
          <div>
            <form className="col s12" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="comment"
                    className="materialize-textarea col s8"
                    data-length="120"
                    value={this.state.comment}
                    onChange={this.handleChange}
                  ></textarea>
                  <button
                    className="btn waves-effect waves-light col s2"
                    type="submit"
                    name="action"
                  >
                    <i className="material-icons right">send</i>
                  </button>
                  <label htmlFor="comment">Your comments...</label>
                </div>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments,
    auth: state.auth
  };
};

export default connect(mapStateToProps, {
  // fetchComment,
  postComment,
  fetchGetComment
})(Comment);
