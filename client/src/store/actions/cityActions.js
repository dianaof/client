export function fetchCityData() {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: FETCH_CITY_DATA
    });
    try {
      // Call the API
      const result = await fetch(`http://localhost:5000/cities/all`);

      const data = await result.json();
      // Update payload in reducer on success
      dispatch({
        type: FETCH_CITY_SUCCESS,
        payload: data
      });
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: FETCH_CITY_FAILURE,
        payload: err
      });
    }
  };
}

export const FETCH_CITY_DATA = "FETCH_CITY_DATA";
export const FETCH_CITY_SUCCESS = "FETCH_CITY_SUCCESS";
export const FETCH_CITY_FAILURE = "FETCH_CITY_FAILURE";

export const fetchCitiesData = () => ({
  type: FETCH_CITY_DATA
});

export const fetchCitySuccess = cities => ({
  type: FETCH_CITY_SUCCESS,
  payload: { cities }
});

export const fetchCityFailure = error => ({
  type: FETCH_CITY_FAILURE,
  payload: { error }
});
