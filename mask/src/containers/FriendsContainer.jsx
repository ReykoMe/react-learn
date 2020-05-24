import {changeSubscribeStatusAC, hideUserAC, loadUsersAC, updateSearchInputAC} from "../redux/reducers/friends-reducer";
import Friends from "../FriendList/Friends";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
      friends: state.friends
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateInput:(text) => dispatch(updateSearchInputAC(text)),
        changeSubscribeStatus:(userId) => dispatch(changeSubscribeStatusAC(userId)),
        hideUser: (userId) => dispatch(hideUserAC(userId)),
        loadUsers: (userList) => dispatch(loadUsersAC(userList))
    }
}
const FriendsContainer= connect(mapStateToProps, mapDispatchToProps)(Friends)
export default FriendsContainer;