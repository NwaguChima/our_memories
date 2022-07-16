import Post from "../components/Posts/Post/Post";
import {
  CREATE,
  DELETE,
  FETCH_ALL,
  UPDATE,
  FETCH_BY_SEARCH,
} from "../constants/actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case DELETE:
      return state.filter((post) => post.id !== action.id);
    case UPDATE:
      return state.map((post) =>
        Post._id === post._id ? action.payload : post
      );
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload };
    case CREATE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
