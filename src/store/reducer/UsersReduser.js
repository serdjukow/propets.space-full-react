import { CHANGE_TOKEN_VALID, SIGN_IN } from "../typeList";

const UsersReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, user: action.payload, tokenIsValid: true };
    case CHANGE_TOKEN_VALID:
      return { ...state, tokenIsValid: action.payload,user:{} };
    default:
      return state;
  }
};
export default UsersReducer;
