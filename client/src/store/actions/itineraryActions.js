export const FETCH_ITINERARY_DATA = "FETCH_ITINERARY_DATA";
export const FETCH_ITINERARY_SUCCESS = "FETCH_ITINERARY_SUCCESS";
export const FETCH_ITINERARY_FAILURE = "FETCH_ITINERARY_FAILURE";

export function fetchItineraryData(city_id) {
  return async dispatch => {
    dispatch({
      type: FETCH_ITINERARY_DATA
    });
    try {
      const res = await fetch(
        `http://localhost:5000/itineraries/bycity/${city_id}`
      );
      const data = await res.json();
      dispatch({
        type: FETCH_ITINERARY_SUCCESS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: FETCH_ITINERARY_FAILURE,
        payload: err
      });
    }
  };
}

export const fetchItinerarySuccess = itineraries => ({
  type: FETCH_ITINERARY_SUCCESS,
  payload: { itineraries }
});
export const fetchItineraryFailure = error => ({
  type: FETCH_ITINERARY_FAILURE,
  payload: { error }
});
