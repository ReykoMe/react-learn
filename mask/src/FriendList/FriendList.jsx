import React from "react";
import FriendItem from "./FriendItem";
import * as axios from "axios"

class FriendList extends React.Component {
    componentDidMount() {
        axios.get ("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.loadUsers(response.data.items)
            })
    }
    render() {
        return (
            <div className="row">

                <div className="col-md-12">
                    {this.props.users.map((user) => <FriendItem name={user.name}
                                                                followed={user.followed}
                                                                id={user.id}
                                                                key={user.id}
                                                                changeSubscribeStatus={this.props.changeSubscribeStatus}
                                                                hideUser={this.props.hideUser}
                    />
                    )}
                </div>
                <div className="col-md-12 mt-3">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item "><a className="page-link bg-primary text-light" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="">1</a></li>
                            <li className="page-item"><a className="page-link" href="">2</a></li>
                            <li className="page-item"><a className="page-link" href="">3</a></li>
                            <li className="page-item"><a className="page-link bg-primary text-light" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default FriendList