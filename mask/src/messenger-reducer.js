import {likesGen} from "./state";


const messengerReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE-DIALOG-TEXT':
            state.newMessageText = action.dialogText;
            console.log(state.newMessageText);
            break;
        case 'SEND-MESSAGE':
            let text = state.newMessageText;
            state.messages.push({
                id: state.messages.length + 1,
                message: text,
                likesCount: likesGen()
            })
            state.newMessageText = '';
            break
        default:
            return state;
    }
    return state;
}

export const updateInputTextAC = (text) =>  ({type: 'UPDATE-DIALOG-TEXT', dialogText: text})
export const sendMessageAC = () => ({type: "SEND-MESSAGE"})
export default messengerReducer;