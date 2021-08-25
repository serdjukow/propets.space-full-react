import {
  ADD_COMMENT,
  FETCH_POSTS,
  FETCH_POST_BY_ID,
  LIKE_POST,
} from "../typeList";

const HomeReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, ...action.payload };
    case FETCH_POST_BY_ID:
      return { ...state, ...action.payload };
    case LIKE_POST:
      const idxLikedPost = state.list.findIndex(
        (post) => post.id === action.payload.id
      );
      if (idxLikedPost === -1) return state;
      const _list = [...state.list];
      _list[idxLikedPost].like = action.payload.like;
      return { ...state, list: _list, postById: action.payload };
    default:
      return state;
  }
};
export default HomeReducer;
