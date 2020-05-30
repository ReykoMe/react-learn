import FriendItem from "./FriendItem";
import avatarImg from "../media/users_avatar.jpg";
import React from "react";

let FriendList = (props) => {
    //высчитываем максимальное количество страниц по формуле всего пользователей : количество отображаемых пользователей. Округляем до максимального значения, дабы не отбрасывать остаток
    const paginationPagesCount = Math.ceil(props.totalUsers / props.countUsers);
    const spread = "...";
    const showPaginationPages = 10;

    let paginationPages = [];


    if (paginationPagesCount > showPaginationPages) {
        for (let i = 1; i <= showPaginationPages; i++) {
            paginationPages.push(i);
        }
        paginationPages.push(spread, paginationPagesCount);
    } else {
        for (let i = 1; i <= paginationPagesCount; i++) {
            paginationPages.push(i);
        }
    }

    //if paginationPages.length > 10 show 1,2,3,4,5,6,7,8,9 ... & LAST_ELEM
    return (
        <div className="row">
            <div className="col-md-12">
                {props.users.map((user) => <FriendItem name={user.name}
                                                       followed={user.followed}
                                                       id={user.id}
                                                       key={user.id}
                                                       changeSubscribeStatus={props.changeSubscribeStatus}
                                                       hideUser={props.hideUser}
                                                       userPhoto={user.photos.small !== null ? user.photos.small : avatarImg}
                    />
                )}
            </div>
            <div className="col-md-12 mt-3">
                <nav aria-label="Page navigation example">
                    <ul className="pagination d-flex flex-wrap">
                        {
                            paginationPages.map((listItem) => {
                                return <li className={props.currentPage === listItem ? "page-item active" : "page-item"}
                                           key={listItem}>
                                        <button className="page-link" onClick={() => {
                                            props.setCurrentPage(listItem)

                                        }}>{listItem}</button>
                                </li>
                            })
                        }

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default FriendList