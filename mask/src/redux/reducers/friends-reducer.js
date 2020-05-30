const initState = {
    searchInputText: "",
    count: 5,
    totalUsers: 0,
    users: [],
    currentPage: 1
}

const FriendsReducer = (state = initState, action) => {
    switch (action.type) {
        case "UPDATE_SEARCH_INPUT_TEXT": {
            return {
                ...state, searchInputText: action.text
            }
        }
        case "CHANGE_SUBSCRIBE_STATUS":
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user;
                })
            }
        case "HIDE_FRIEND_ITEM":
            //копируем state, создаем в нем свойство users, куда присваиваем все значения, которые подходят под условия
            return {...state, users: state.users.filter((user) => user.id !== action.userId)}
        case "LOAD_USERS":
            return {...state, users: [...action.users]}
        case "CURRENT_PAGE":
            return {...state, currentPage: action.page}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsers: action.usersCount}
        //при помощи spread-оператора производится склеивание старого массива и нового, а результат вовзвращается в виде нового объекта
        default:
            return state;
    }

}

export const setTotalUsersCountAC = (usersCount) => ({type: "SET_TOTAL_USERS_COUNT", usersCount: usersCount})
export const setCurrentPageAC = (page) => ({type: "CURRENT_PAGE", page: page})
export const hideUserAC = (userId) => ({type: "HIDE_FRIEND_ITEM", userId: userId});
export const changeSubscribeStatusAC = (userId) => ({type: "CHANGE_SUBSCRIBE_STATUS", userId: userId})
export const loadUsersAC = (users) => ({type: "LOAD_USERS", users: users})
export const updateSearchInputAC = (text) => ({type: "UPDATE_SEARCH_INPUT_TEXT", text: text})
export default FriendsReducer;