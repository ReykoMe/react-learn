import { sendMessageAC, updateInputTextAC } from "../redux/reducers/messenger-reducer";
import MessagesInput from "../components/Messenger/Messages/MessagesInput";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        messenger: state.messenger,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
        changeInputValue: (text) => {
            dispatch(updateInputTextAC(text));
        },
    };
};
const MessagesInputContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesInput);
export default MessagesInputContainer;
