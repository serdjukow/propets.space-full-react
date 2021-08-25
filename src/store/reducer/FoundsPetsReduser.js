import { FETCH_FOUND_PETS, FETCH_FOUND_PET_BY_ID } from "../typeList";

const FoundsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_FOUND_PETS:
      return { ...state, ...action.payload };
    case FETCH_FOUND_PET_BY_ID:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default FoundsReducer;
