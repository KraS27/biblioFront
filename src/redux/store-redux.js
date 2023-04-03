import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./Reducers/profileReducer";
import dialogsReducer from "./Reducers/dialogsReducer";
import usersReducer from "./Reducers/usersReducer";
import authReducer from "./Reducers/authReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    userPage:usersReducer,
    auth:authReducer
})

let store = legacy_createStore(reducers);
export default store;