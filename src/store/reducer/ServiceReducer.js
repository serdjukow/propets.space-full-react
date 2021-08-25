import { FETCH_ARTICLES, FETCH_ARTICLES_BY_ID } from "../typeList";

const ServiceReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return { ...state, ...action.payload };
      case FETCH_ARTICLES_BY_ID:
      return { ...state, ...action.payload }
    default:
      return state;
  }
};
export default ServiceReducer;
