import React from "react";
import {loadUserProfile} from '../redux/reducers/profile-reducer'
import { connect } from "react-redux";
import {getProfileInfo} from '../service/api/axiosQueries'
import Content from "../Content/Content";
import { withRouter } from "react-router-dom";
class ContentContainer extends React.Component { 

    getProfileInfo = (userId) => {           
            getProfileInfo(userId).then((response) => {
                this.props.loadUserProfile(response)  
            })           
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
    loadUserProfile,
})(urlDataContainer)