import React from "react";
import Profile from "./Profile/profile";
import WallContainer from "../containers/WallContainer";

const Content = () => {
    return (
        <div className={"row"}>
            <div className="col">
                <Profile />
                <WallContainer />
            </div>
        </div>
    )
}

export default Content;