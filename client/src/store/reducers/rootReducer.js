import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
  cities: cityReducer,
  itineraries: itineraryReducer,
  activities: activityReducer,
  auth: authReducer,
  error: errorReducer,
  comments: commentReducer
});

export default rootReducer;
