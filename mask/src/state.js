import profileReducer from "./redux/reducers/profile-reducer";
import messengerReducer from "./redux/reducers/messenger-reducer";
import sidebarReducer from "./redux/reducers/sidebar-reducer";

let Store = {
  _state: {
    profile: {
      newText: "",
      wallPosts: [
        {id: 1, author: "Василий Чичкалкин", message: "Бородульку тебе", likes: 5},
        {id: 2, author: "Вероника Бусилкина", message: "I KNOW!!!", likes: 11},
        {id: 3, author: "Аркадий Запоротый", message: "Пойдем-ка покурим-ка", likes: 32},
        {id: 4, author: "Зинаида Зидановна", message: "Верни сотку", likes: 0},
        {id: 5, author: "Алкобот Дизенфектиконович", message: "Ктулху зохавит тебя", likes: 21},
      ],
    },
    messenger: {
      newMessageText: "",
      messages: [
        {id: 1, message: "It's Posts from: %username", likesCount: 23},
        {id: 2, message: "Message from another %username", likesCount: 11},
        {id: 3, message: "Shmyga", likesCount: 3},
        {id: 4, message: "Ololol", likesCount: 118},
        {id: 5, message: "Bingo", likesCount: 0}
      ],
      users: [
        {id: 1, name: "Anatoly"},
        {id: 2, name: "Dmytri"},
        {id: 3, name: "Oksana"},
        {id: 4, name: "Gennadi"},
        {id: 5, name: "Garry"},
        {id: 6, name: "Fedor"}
      ]
    },
    sidebar: {
      friends: [
        {id: 1, firstName: "Nikola Tesla", status: "Direct Current in our Houses"},
        {id: 2, firstName: "Dmitriy Mendeleev", status: "Let me more Vodka"},
        {id: 3, firstName: "Isak Newton", status: "All around is a round"}
      ]
    }
  },
  _callSubscriber() {
    console.log('state changed')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.messenger = messengerReducer(this._state.messenger, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state);
  }
}


export const likesGen = () => Math.floor(Math.random() * 10);

export default Store;
window.store = Store