import React from "react";
import style from "./PostMessage.module.css"
    const Post = (props) => {
        return (
            <div className="shadow p-3 rounded mb-2">
                <p className="font-weight-bold mb-2">
                    <span className={"badge badge-pill badge-secondary mr-2"}> id: {props.id}</span>{props.userName}
                </p>
                <p className="m-0 mb-2">{props.message}</p>
                <p className={style.fsize + " m-0"}>Likes: {props.likes}</p>
            </div>
        )
    }
export default Post;