import {friendsApi} from '../../service/api/axiosQueries'
const initState = {
    count: 10,
    page: 1,
    friends: [
       
    ],
};

const sidebarReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_LAST_REGISTERED_USERS":
            return { ...state, friends: [...action.lastUsers] };
        default:
            return state;
    }
};

export const setLastRegisteredUsers = (lastUsers) => ({ type: "SET_LAST_REGISTERED_USERS", lastUsers });
export const getLastRegisteredUsers = (page, count) => async (dispatch) => {
    let response = await friendsApi.getAllUsers(page, count)
    dispatch(setLastRegisteredUsers(response.items))
  
  };

export default sidebarReducer;
