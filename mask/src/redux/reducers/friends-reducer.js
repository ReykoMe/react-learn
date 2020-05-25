const initState = {
  searchInputText: "",
  users: [],
  // users: [
  //     {id: 1, name: "Bingo", location: "Ukraine, Kuiv", status: "Eating fresh fish", isFriend: false},
  //     {id: 2, name: "Jango", location: "Africa, Luanda", status: "Working hard", isFriend: false},
  //     {id: 3, name: "Anna", location: "Russia, Moscow", status: "Searching job", isFriend: true},
  // ],
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
      return { ...state, users: [...state.users, ...action.users] }
    //при помощи spread-оператора производится склеивание старого массива и нового, а результат вовзвращается в виде нового объекта
    default:
      return state;
  }

}
export const hideUserAC = (userId) => ({ type: "HIDE_FRIEND_ITEM", userId: userId });
export const changeSubscribeStatusAC = (userId) => ({ type: "CHANGE_SUBSCRIBE_STATUS", userId: userId })
export const loadUsersAC = (users) => ({ type: "LOAD_USERS", users: users })
export const updateSearchInputAC = (text) => ({ type: "UPDATE_SEARCH_INPUT_TEXT", text: text })
export default FriendsReducer;