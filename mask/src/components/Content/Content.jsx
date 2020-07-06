import React from "react";
import Profile from "./Profile/profile";
import WallContainer from "../../containers/WallContainer";

const Content = ({userProfile, authorised, updateUserStatus, loadAvatarImage}) => {
    return (
        <div className={"row"}>
            <div className='col'>
                <Profile
                    userProfile={userProfile.currentProfile}
                    authorised={authorised}
                    status={userProfile.status}
                    updateUserStatus={updateUserStatus}
                    loadAvatarImage={loadAvatarImage}
                />
                <WallContainer/>
            </div>
        </div>
    );
};

export default Content;
