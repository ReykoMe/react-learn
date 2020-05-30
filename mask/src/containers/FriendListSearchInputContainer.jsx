import { updateSearchInputAC } from "../redux/reducers/friends-reducer";
import SearchFriendsInput from "../FriendList/SearchFriendsInput";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        textInput: state.friends.searchInputText,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateInput: (text) => dispatch(updateSearchInputAC(text)),
    };
};
const SearchFriendsInputContainer = connect(mapStateToProps, mapDispatchToProps)(SearchFriendsInput);
export default SearchFriendsInputContainer;
