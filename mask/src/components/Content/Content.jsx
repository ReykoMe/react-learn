import React from "react";
import Profile from "./Profile/profile";
import WallContainer from "../../containers/WallContainer";

const Content = (props) => {
    
    return (
        <div className={"row"}>
            <div className='col'>
                <Profile userProfile={props.userProfile} authorised={props.authorised} />
                <WallContainer />
            </div>
        </div>
    );
};

export default Content;
