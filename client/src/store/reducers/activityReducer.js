import {
  FETCH_ACTIVITY_DATA,
  FETCH_ACTIVITY_SUCCESS,
  FETCH_ACTIVITY_FAILURE
} from "../actions/activityActions.js";

const initialState = {
  payload: [],
  isLoading: false,
  error: null
};

export default function activityReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACTIVITY_DATA:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_ACTIVITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payload: action.payload
      };
    case FETCH_ACTIVITY_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
