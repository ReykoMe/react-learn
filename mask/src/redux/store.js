import { createStore, combineReducers } from "redux";
import profileReducer from "./reducers/profile-reducer"
import messengerReducer from "./reducers/messenger-reducer"
import sidebarReducer from "./reducers/sidebar-reducer"
import FriendsReducer from "./reducers/friends-reducer";
import HooksReducer from "../HooksDir/hooks-reducer";
let reducers = combineReducers({
  messenger: messengerReducer,
  profile: profileReducer,
  sidebar: sidebarReducer,
  friends: FriendsReducer,
  hooksTest: HooksReducer
});

let store = createStore(reducers);


export default store;