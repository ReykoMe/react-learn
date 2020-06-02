import React from "react";
import SearchFriendsInputContainer from "../../../containers/FriendListSearchInputContainer";
import FriendListContainer from "../../../containers/FriendListContainer";
// import FriendListHooks from "../HooksDir/FriendListHooks";


let Friends = () => {
    return (
        <div className="row">
            <div className="col">
                <SearchFriendsInputContainer />
                {/*<FriendListHooks />*/}
                <FriendListContainer />
            </div>
            
        </div>
    )
}

export default Friends