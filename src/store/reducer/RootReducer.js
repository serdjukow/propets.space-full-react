import { combineReducers } from "redux";
import FoundsReducer from "./FoundsPetsReduser";
import HomeReducer from "./HomeReducer";
import LostsReducer from "./LostsPetsReducer";
import ServiceReducer from "./ServiceReducer";
import UsersReducer from "./UsersReduser";

const RootReducer=combineReducers({
    users:UsersReducer,
    foundsPets:FoundsReducer,
    lostsPets:LostsReducer,
    posts:HomeReducer,
    articles:ServiceReducer
})
export default RootReducer