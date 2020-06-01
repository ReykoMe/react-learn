const initState = {
    searchInputText: "",
    count: 10,
    totalUsers: 0,
    users: [],
    currentPage: 1,
    gettingData: false
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
                        return { ...user, followed: !user.followed }
                    }
                    return user;
                })
            }
        case "HIDE_FRIEND_ITEM":
            //копируем state, создаем в нем свойство users, куда присваиваем все значения, которые подходят под условия
            return { ...state, users: state.users.filter((user) => user.id !== action.userId) }
        case "LOAD_USERS":
            return { ...state, users: [...action.users] }
        case "CURRENT_PAGE":
            return { ...state, currentPage: action.page }
        case "SET_TOTAL_USERS_COUNT":
            return { ...state, totalUsers: action.usersCount }
        case "TOGGLE_GETTING_DATA":
            return { ...state, gettingData: action.toggle }
        //при помощи spread-оператора производится склеивание старого массива и нового, а результат вовзвращается в виде нового объекта
        default:
            return state;
    }

}

export const toggleGettingData = (toggle) => ({type:"TOGGLE_GETTING_DATA", toggle })
export const setTotalUsersCount = (usersCount) => ({ type: "SET_TOTAL_USERS_COUNT", usersCount })
export const setCurrentPage = (page) => ({ type: "CURRENT_PAGE", page })
export const hideUser = (userId) => ({ type: "HIDE_FRIEND_ITEM", userId });
export const changeSubscribeStatus = (userId) => ({ type: "CHANGE_SUBSCRIBE_STATUS", userId })
export const loadUsers = (users) => ({ type: "LOAD_USERS", users: users })
export const updateSearchInputAC = (text) => ({ type: "UPDATE_SEARCH_INPUT_TEXT", text })
export default FriendsReducer;