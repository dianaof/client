import { FETCH_POST, POST_COMMENT, COMMENT_LOADING } from "../actions/types";

const initialState = {
  payload: [],
  comment: "",
  isLoading: false
};

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case COMMENT_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_POST:
      return { ...state, payload: action.payload, isLoading: false };

    case POST_COMMENT:
      return { ...state, payload: [action.payload, ...state.payload] };
    default:
      return state;
  }
}
