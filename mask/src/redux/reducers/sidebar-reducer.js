import {friendsApi} from '../../service/api/axiosQueries'
const initState = {
    count: 10,
    page: 1,
    friends: [
        // {id: 1, firstName: "Nikola Tesla", status: "Direct Current in our Houses"},
        // {id: 2, firstName: "Dmitriy Mendeleev", status: "Let me more Vodka"},
        // {id: 3, firstName: "Isak Newton", status: "All around is a round"}
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
export const getLastRegisteredUsers = (page, count) => (dispatch) => {
      friendsApi.getAllUsers(page, count).then((response) => {
        console.log(response)
        dispatch(setLastRegisteredUsers(response.items))
      });
  };

export default sidebarReducer;
