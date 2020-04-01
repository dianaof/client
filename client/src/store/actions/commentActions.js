import axios from "axios";
import { FETCH_POST, POST_COMMENT, COMMENT_LOADING } from "../actions/types";

export const loadComment = () => {
  return { type: COMMENT_LOADING };
};

// export const fetchComment = itinerary_id => dispatch => {
//   axios
//     .get(`http://localhost:5000/comments/byitinerary/${itinerary_id}`)
//     .then(res => dispatch({ type: FETCH_POST, payload: res.data }));
// };

export const fetchGetComment = itinerary_id => dispatch => {
  console.log(itinerary_id);
  axios
    .get(`http://localhost:5000/getComments/getByitinerary/${itinerary_id}`)
    .then(res => {
      console.log("fetchGetComment");
      console.log(res.data);
      dispatch({ type: FETCH_POST, payload: res.data });
    });
};

export const postComment = ({ username, comment, itinerary_id }) => (
  dispatch,
  getState
) => {
  console.log(tokenConfig());

  const body = { username, comment, itinerary_id };
  console.log(body);
  // axios
  //   .post("http://localhost:5000/comments/test")
  //   .then(res => console.log(res.data));
  return axios
    .post("http://localhost:5000/comments", body, tokenConfig())
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
    config.headers["Authorization"] = "Bearer " + token; //dinamico localStorage
  }
  console.log(config);

  return config;
};
