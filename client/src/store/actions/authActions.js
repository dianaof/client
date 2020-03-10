import axios from "axios";
import { returnErrors } from "./errorActions";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR
  // LOGIN_SUCCESS,
  // LOGIN_FAIL,
  // LOGOUT_SUCCESS,
  // REGISTER_SUCCESS,
  // REGISTER_FAIL
} from "./types";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get("http://localhost:5000/users", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

//login

//register

export const tokenConfig = getState => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  console.log(token);

  if (token) {
    config.headers["Authorization"] =
      "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlM2MzNjk1YWQ2YThlMDQ3NDk3YzNmOCIsImlhdCI6MTU4MTUwNDkyNCwiZXhwIjoxNTg0MDk2OTI0fQ.kTkzp4Pt95OqEA8g7JwXS7qewe87IIB1_gI3ytnrjAs"; //dinamico localStorage
  }
  return config;
};
