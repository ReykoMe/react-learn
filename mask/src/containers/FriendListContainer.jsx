import {changeSubscribeStatusAC, hideUserAC, loadUsersAC} from "../redux/reducers/friends-reducer";
import FriendList from "../FriendList/FriendList";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
    return {
      users: state.friends.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeSubscribeStatus:(userId) => dispatch(changeSubscribeStatusAC(userId)),
        hideUser: (userId) => dispatch(hideUserAC(userId)),
        loadUsers: (userList) => dispatch(loadUsersAC(userList))
    }
}
const FriendListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendList)
export default FriendListContainer;