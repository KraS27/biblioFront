import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./Reducers/profileReducer";
import dialogsReducer from "./Reducers/dialogsReducer";

let reducers = combineReducers({
    profile:profileReducer,
    dialogs:dialogsReducer
})

let store = legacy_createStore(reducers);
export default store;