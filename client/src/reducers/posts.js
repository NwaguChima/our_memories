import Post from "../components/Posts/Post/Post";
import {
  CREATE,
  DELETE,
  FETCH_ALL,
  UPDATE,
  FETCH_BY_SEARCH,
  START_LOADING,
  END_LOADING,
  LIKE,
} from "../constants/actionTypes";

const reducer = (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
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
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id),
      };
    case LIKE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          Post._id === post._id ? action.payload : post
        ),
      };
    default:
      return state;
  }
};

export default reducer;
