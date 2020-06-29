import { friendsApi } from "../../service/api/axiosQueries";

const initState = {
    searchInputText: "",
    count: 10,
    totalUsers: 0,
    users: [],
    currentPage: 1,
    gettingData: false,
    following: [],
};

const FriendsReducer = (state = initState, action) => {
    switch (action.type) {
        case "UPDATE_SEARCH_INPUT_TEXT": {
            return {
                ...state,
                searchInputText: action.text,
            };
        }
        case "CHANGE_SUBSCRIBE_STATUS":
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: !user.followed };
                    }
                    return user;
                }),
            };
        case "HIDE_FRIEND_ITEM":
            //копируем state, создаем в нем свойство users, куда присваиваем все значения, которые подходят под условия
            return { ...state, users: state.users.filter((user) => user.id !== action.userId) };
        case "LOAD_USERS":
            return { ...state, users: [...action.users] };
        case "CURRENT_PAGE":
            return { ...state, currentPage: action.page };
        case "SET_TOTAL_USERS_COUNT":
            return { ...state, totalUsers: action.usersCount };
        case "TOGGLE_GETTING_DATA":
            return { ...state, gettingData: action.toggle };
        case "TOGGLE_FOLLOWING":
            return {
                ...state,
                following: action.toggle
                    ? [...state.following, action.userId]
                    : [state.following.filter((id) => id !== action.userId)],
            };
        default:
            return state;
    }
};

export const toggleFollowing = (toggle, userId) => ({ type: "TOGGLE_FOLLOWING", toggle, userId });
export const toggleGettingData = (toggle) => ({ type: "TOGGLE_GETTING_DATA", toggle });
export const setTotalUsersCount = (usersCount) => ({ type: "SET_TOTAL_USERS_COUNT", usersCount });
export const setCurrentPage = (page) => ({ type: "CURRENT_PAGE", page });
export const hideUser = (userId) => ({ type: "HIDE_FRIEND_ITEM", userId });
export const changeSubscribeStatus = (userId) => ({ type: "CHANGE_SUBSCRIBE_STATUS", userId });
export const loadUsers = (users) => ({ type: "LOAD_USERS", users: users });
export const updateSearchInputAC = (text) => ({ type: "UPDATE_SEARCH_INPUT_TEXT", text });

export const getUsers = (page, count) => {
    return async (dispatch) => {
        dispatch(toggleGettingData(true));
        let response = await friendsApi.getAllUsers(page, count)
            dispatch(toggleGettingData(false));
            dispatch(loadUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
     
    };
};

export const changeSubscribeStatusTh = (userId, followed) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userId));
        followed
            ? friendsApi.userUnsubscribe(userId).then((response) => {
                  response.resultCode === 0 && dispatch(changeSubscribeStatus(userId));
                  dispatch(toggleFollowing(false, userId));
              })
            : friendsApi.userSubscribe(userId).then((response) => {
                  response.resultCode === 0 && dispatch(changeSubscribeStatus(userId));
                  dispatch(toggleFollowing(false,userId));
              });
    };
};

export default FriendsReducer;
