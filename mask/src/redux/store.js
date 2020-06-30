import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import profileReducer from "./reducers/profile-reducer"
import messengerReducer from "./reducers/messenger-reducer"
import sidebarReducer from "./reducers/sidebar-reducer"
import FriendsReducer from "./reducers/friends-reducer";
import authReducer from "./reducers/auth-reducer";
import ReduxThunk from 'redux-thunk'
import ReduxLogger from 'redux-logger'

let reducers = combineReducers({
  messenger: messengerReducer,
  profile: profileReducer,
  sidebar: sidebarReducer,
  friends: FriendsReducer,
  auth: authReducer
});

let store = createStore(reducers, compose(applyMiddleware(ReduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

  //, applyMiddleware(ReduxThunk)
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store;