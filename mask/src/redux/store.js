import { createStore, combineReducers } from "redux";
import profileReducer from "../profile-reducer"
import messengerReducer from "../messenger-reducer"
import sidebarReducer from "../sidebar-reducer"

let reducers = combineReducers({
  messengerReducer, 
  profileReducer,
  sidebarReducer,
});

let store = createStore(reducers);


export default store;