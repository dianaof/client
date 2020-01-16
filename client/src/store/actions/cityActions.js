export function fetchCityData() {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: FETCH_CITY_DATA
    });
    try {
      // Call the API
      const result = await fetchCitiesData(`http://localhost:5000/cities/all`);
      // Update payload in reducer on success
      dispatch({
        type: FETCH_CITY_SUCCESS,
        payload: result
      });
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: FETCH_CITY_FAILURE,
        error: err
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
