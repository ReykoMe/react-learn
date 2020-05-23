import {likesGen} from "../../state";

const initState = {
  newMessageText: "Bingo",
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
}

const messengerReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE-DIALOG-TEXT': {
      let newState = {
        ...state, newMessageText: action.dialogText
      };
      console.log(newState.newMessageText);
      return newState;
    }
    case 'SEND-MESSAGE': {
      let newState = {
        ...state,
        messages: [...state.messages]
      };

      newState.messages.push({
        id: state.messages.length + 1,
        message: state.newMessageText,
        likesCount: likesGen()
      })
      newState.newMessageText = '';
      return newState;
    }
    default:
      return state;
  }
}

export const updateInputTextAC = (text) => ({type: 'UPDATE-DIALOG-TEXT', dialogText: text})
export const sendMessageAC = () => ({type: "SEND-MESSAGE"})
export default messengerReducer;