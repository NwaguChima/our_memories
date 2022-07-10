import Post from "../components/Posts/Post/Post";

const reducer = (posts = [], action) => {
  switch (action.type) {
    case "DELETE":
      return posts.filter((post) => post.id !== action.id);
    case "UPDATE":
      return posts.map((post) =>
        Post._id === post._id ? action.payload : post
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default reducer;
