import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./Reducers/profileReducer";
import dialogsReducer from "./Reducers/dialogsReducer";
import usersReducer from "./Reducers/usersReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    userPage:usersReducer
})

let store = legacy_createStore(reducers);
export default store;