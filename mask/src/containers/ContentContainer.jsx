import React from "react";
import * as axios from 'axios'
import { connect } from "react-redux";
import {loadUserProfile} from '../redux/reducers/profile-reducer'
import Content from "../Content/Content";
import { withRouter } from "react-router-dom";

class ContentContainer extends React.Component {
    
    getProfileInfo = (userId) => {
        let url = `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
        axios
            .get(url)
            .then((response) => {
                this.props.loadUserProfile(response.data)             
            });
    };
    componentDidMount () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8509
        }
        this.getProfileInfo(userId)
    }
    render() {
        return (
               <Content {...this.props}/>
        );
    }
}


let mapStateToProps = (state) => ({
    userProfile: state.profile.currentProfile
})

let urlDataContainer = withRouter(ContentContainer)
export default connect (mapStateToProps, {
    loadUserProfile
})(urlDataContainer)