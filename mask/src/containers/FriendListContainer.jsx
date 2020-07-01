import {
    changeSubscribeStatusTh,
    hideUser,
    loadUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowing,
    getUsers,
} from "../redux/reducers/friends-reducer";

import { connect } from "react-redux";
import React from "react";
import FriendList from "../components/Content/FriendList/FriendList";
import Preloader from "../service/Preloader";
import { compose } from "redux";
import { CheckAuth } from "../components/HOC/AuthRedirect";
import {
    getFriendsSelector,
    getFriendsCount,
    getCurrentPage,
    getGettingData,
    getFollowing,
    getTotalUsers,
} from "../redux/selectors/friends_selector";

class FriendListContainer extends React.Component {
    setCurrentPage = (page, count = this.props.countUsers) => {
        if (page === "...") {
            let enterPage = parseInt(prompt("Enter number of page"), 10);
            if (!enterPage) {
                alert('Введите номер страницы илил нафиг')
                return
            }
            this.props.setCurrentPage(enterPage);
            this.getUsers(enterPage, count);
        } else {
            this.props.setCurrentPage(page, count);
            this.getUsers(page, count);
        }
    };
    getUsers = (page, count) => {
        this.props.getUsers(page, count);
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
        users: getFriendsSelector(state),
        totalUsers: getTotalUsers(state),
        countUsers: getFriendsCount(state),
        currentPage: getCurrentPage(state),
        gettingData: getGettingData(state),
        following: getFollowing(state),
    };
};

//Вместо прописывания путей к AC для каждого действия и обертывания их переменной mapDispatchToProps можно сразу запихнуть АС (без аргументов) во вторую часть connect-a. Переименовав AC (убрав соответствующую приставку), также можно легко использовать синтаксис ЕS6 для сокращения записи. Вместо friends: friends достаточно просто использовать friends
export default compose(
    connect(mapStateToProps, {
        changeSubscribeStatusTh,
        hideUser,
        loadUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleFollowing,
        getUsers,
    }),
    CheckAuth
)(FriendListContainer);
