import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComment, postComment } from "../store/actions/commentActions";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      comment: "",
      username: ""
      // itinerary_id: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      username: this.state.username,
      itinerary_id: this.props.itinerariID
    });
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    const { comments } = this.props;
    let commentsList = comments;
    console.log(this.props);

    return isAuthenticated ? (
      <div>
        {" "}
        <form className="col s12" onSubmit={this.handleSubmit}>
          >
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="comment"
                className="materialize-textarea"
                data-length="120"
                value={this.state.comment}
                onChange={this.handleChange}
              ></textarea>
              <label htmlFor="textarea1">Comment</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    ) : (
      (commentsList = commentsList.payload.map(comment => {
        return (
          <div className="row" key={comment._id}>
            <div>{comment.comment}</div>
            <div>{comment.username}</div>
          </div>
        );
      }))
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments,
    auth: state.auth
  };
};

export default connect(mapStateToProps, { fetchComment, postComment })(Comment);
