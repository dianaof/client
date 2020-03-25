import axios from "axios";
import { FETCH_POST, POST_COMMENT, COMMENT_LOADING } from "../actions/types";

export const loadComment = () => {
  return { type: COMMENT_LOADING };
};

export const fetchComment = itinerary_id => dispatch => {
  axios
    .get(`http://localhost:5000/comments/byitinerary/${itinerary_id}`)
    .then(res => dispatch({ type: FETCH_POST, payload: res.data }));
};

export const postComment = ({ username, comment, itinerary_id }) => (
  dispatch,
  getState
) => {
  const body = JSON.stringify({ username, comment, itinerary_id });
  return axios
    .post("http://localhost:5000/comments", tokenConfig(getState), body)
    .then(res => dispatch({ type: POST_COMMENT, payload: res.data }));
};

export const tokenConfig = getState => {
  const token = localStorage.getItem("token");
  console.log(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  console.log(token);

  if (token) {
    config.headers["Authorization"] = token; //dinamico localStorage
  }
  return config;
};
