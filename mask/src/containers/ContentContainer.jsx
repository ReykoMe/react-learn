import React from "react";
import {getUserProfileInfo } from "../redux/reducers/profile-reducer";
import { connect } from "react-redux";

import Content from "../components/Content/Content";
import { withRouter } from "react-router-dom";

class ContentContainer extends React.Component {
    getProfileInfo = (userId) => {
        this.props.getUserProfileInfo(userId);
    };
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8509; //Если userId === null || undefined
        }
        this.getProfileInfo(userId);
    }
    render() {
        return <Content {...this.props} />;
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profile.currentProfile,
});

let urlDataContainer = withRouter(ContentContainer);
export default connect(mapStateToProps, {
    getUserProfileInfo,
})(urlDataContainer);
