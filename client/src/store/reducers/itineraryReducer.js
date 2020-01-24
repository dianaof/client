import {
  FETCH_ITINERARY_DATA,
  FETCH_ITINERARY_SUCCESS,
  FETCH_ITINERARY_FAILURE
} from "../actions/itineraryActions.js";

const initialState = { payload: [], isLoading: false, error: null };

export default function itineraryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITINERARY_DATA:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_ITINERARY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payload: action.payload
      };
    case FETCH_ITINERARY_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
