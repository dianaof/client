import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  cities: cityReducer,
  itineraries: itineraryReducer,
  activities: activityReducer,
  auth: authReducer,
  error: errorReducer
});

export default rootReducer;
