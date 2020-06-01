import React from "react";
import * as axios from 'axios'
import { connect } from "react-redux";
import {loadUserProfile} from '../redux/reducers/profile-reducer'
import Content from "../Content/Content";

class ContentContainer extends React.Component {
    getProfileInfo = () => {
        let url = `https://social-network.samuraijs.com/api/1.0/profile/2`
        axios
            .get(url)
            .then((response) => {
                this.props.loadUserProfile(response.data)             
            });
    };
    componentDidMount () {
        this.getProfileInfo()
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


export default connect (mapStateToProps, {
    loadUserProfile
})(ContentContainer)