import {
    changeSubscribeStatusTh,
    hideUser,
    loadUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowing, getUsers,
} from "../redux/reducers/friends-reducer";

import { connect } from "react-redux";
import React from "react";
import FriendList from "../components/Content/FriendList/FriendList";
import Preloader from "../service/Preloader";
import { compose } from "redux";
import { CheckAuth } from "../components/HOC/AuthRedirect";


class FriendListContainer extends React.Component {

    setCurrentPage = (page, count = this.props.countUsers) => {
        if (page === "...") {
            let enterPage = parseInt(prompt("Enter number of page"), 10);
            this.props.setCurrentPage(enterPage);
            this.getUsers(enterPage, count);
        } else {
            this.props.setCurrentPage(page, count);
            this.getUsers(page, count);
        }
    };
    getUsers = (page, count) => {
        this.props.getUsers(page, count)
    };

    componentDidMount() {
        this.getUsers(this.props.currentPage, this.props.countUsers);
    }

    render() {
        return (
            <>
                {this.props.gettingData ? (
                    <Preloader />
                ) : (
                    <FriendList
                        totalUsers={this.props.totalUsers}
                        countUsers={this.props.countUsers}
                        currentPage={this.props.currentPage}
                        setCurrentPage={this.setCurrentPage}
                        getUsers={this.getUsers}
                        users={this.props.users}
                        hideUser={this.props.hideUser}
                        changeSubscribeStatus={this.props.changeSubscribeStatus}
                        following={this.props.following}
                        toggleFollowing={this.props.toggleFollowing}
                        changeSubscribeStatusTh={this.props.changeSubscribeStatusTh}
                    />
                )}
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.friends.users,
        totalUsers: state.friends.totalUsers,
        countUsers: state.friends.count,
        currentPage: state.friends.currentPage,
        gettingData: state.friends.gettingData,
        following: state.friends.following,
    };
};
// let mapDispatchToProps = (dispatch) => {
//     return {
//         changeSubscribeStatus: (userId) => dispatch(changeSubscribeStatusAC(userId)),
//         hideUser: (userId) => dispatch(hideUserAC(userId)),
//         loadUsers: (userList) => dispatch(loadUsersAC(userList)),
//         setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
//         setTotalUsersCount: (usersCount) => dispatch(setTotalUsersCountAC(usersCount)),
//         toggleGettingData: (toggle) => dispatch(toggleGettingDataAC(toggle)),
//     };
// };

//Вместо прописывания путей к AC для каждого действия и обертывания их переменной mapDispatchToProps можно сразу запихнуть АС (без аргументов) во вторую часть connect-a. Переименовав AC (убрав соответствующую приставку), также можно легко использовать синтаксис ЕS6 для сокращения записи. Вместо friends: friends достаточно просто использовать friends
export default compose (
    connect(mapStateToProps, {
        changeSubscribeStatusTh,
        hideUser,
        loadUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleFollowing,
        getUsers
    }),
    CheckAuth
)(FriendListContainer)
// export default connect(mapStateToProps, {
//     changeSubscribeStatusTh,
//     hideUser,
//     loadUsers,
//     setCurrentPage,
//     setTotalUsersCount,
//     toggleFollowing,
//     getUsers
// })(FriendListContainer);
