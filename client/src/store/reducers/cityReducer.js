import { connect } from "react-redux";
import {
  FETCH_CITY_DATA,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_FAILURE
} from "../actions/cityActions.js";

const initialState = { payload: [], error: {} };

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CITY_DATA:
      return {
        ...state
      };
    case FETCH_CITY_SUCCESS:
      return {
        ...state,
        payload: action.payload
      };
    case FETCH_CITY_FAILURE:
      return {
        ...state,
        error: action.error
      };

    // case RESET_CITY_DATA:
    //   return { ...state, ...initialState };
    default:
      return state;
  }
}
