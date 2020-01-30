export const FETCH_ACTIVITY_DATA = "FETCH_ACTIVITY_DATA";
export const FETCH_ACTIVITY_SUCCESS = "FETCH_ACTIVITY_SUCCESS";
export const FETCH_ACTIVITY_FAILURE = "FETCH_ACTIVITY_FAILURE";

export function fetchActivityData(city_id) {
  return async dispatch => {
    dispatch({
      type: FETCH_ACTIVITY_DATA
    });
    try {
      const res = await fetch(
        // `http://localhost:5000/activities/byitinerary/${itinerary_id}`
        `http://localhost:5000/activities/byactivity/${city_id}`
      );
      const data = await res.json();
      dispatch({
        type: FETCH_ACTIVITY_SUCCESS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: FETCH_ACTIVITY_FAILURE,
        payload: err
      });
    }
  };
}
export const fetchItinerarySuccess = activities => ({
  type: FETCH_ACTIVITY_SUCCESS,
  payload: { activities }
});
export const fetchItineraryFailure = error => ({
  type: FETCH_ACTIVITY_FAILURE,
  payload: { error }
});
