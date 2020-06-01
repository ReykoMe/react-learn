import {
    changeSubscribeStatus,
    hideUser,
    loadUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleGettingData,
} from "../redux/reducers/friends-reducer";

import { connect } from "react-redux";
import React from "react";
import * as axios from "axios";
import FriendList from "../FriendList/FriendList";
import Preloader from "../service/Preloader";

class FriendListContainer extends React.Component {
    
    setCurrentPage = (page) => {
        if (page === "...") {
            let enterPage = parseInt(prompt("Enter number of page"), 10);
            this.props.setCurrentPage(enterPage);
            this.getUsers(enterPage);
        } else {
            this.props.setCurrentPage(page);
            this.getUsers(page);
        }
    };
   getUsers = (page) => {
        this.props.toggleGettingData(true);
        let url = `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUsers}&page=${page}`
        // let response = fetch(url).then(response => response.json()).then(data => {
        //     this.props.toggleGettingData(false)
        //     this.props.loadUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // })

        axios
            .get(url)
            .then((response) => {
                this.props.toggleGettingData(false);
                this.props.loadUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    componentDidMount() {
        this.getUsers(this.props.currentPage);
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

export default connect(mapStateToProps, {
    changeSubscribeStatus,
    hideUser,
    loadUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleGettingData,
})(FriendListContainer);
