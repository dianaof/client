// import { connect } from "react-redux";
import {
  FETCH_CITY_DATA,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_FAILURE
} from "../actions/cityActions.js";

const initialState = {
  payload: [],
  isLoading: false,
  error: null
};

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CITY_DATA:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_CITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payload: action.payload
      };
    case FETCH_CITY_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    // case RESET_CITY_DATA:
    //   return { ...state, ...initialState };
    default:
      return state;
  }
}
