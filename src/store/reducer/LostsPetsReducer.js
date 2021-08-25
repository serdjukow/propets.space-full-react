import { FETCH_LOST_PETS, FETCH_LOST_PET_BY_ID } from "../typeList";

const LostsReducer=(state={}, action)=>{
    switch (action.type) {
        case FETCH_LOST_PETS:
          return { ...state, ...action.payload };
        case FETCH_LOST_PET_BY_ID:
          return { ...state, ...action.payload };
        default:
          return state;
      }
}
export default LostsReducer