import React from "react";
import Header from "../components/Header/Header";
import {setUserData} from '../redux/reducers/auth-reducer'
import {connect} from 'react-redux'
import { profileApi } from "../service/api/axiosQueries";
class HeaderContainer extends React.Component {
    componentDidMount() {
        profileApi.getMyProfile().then((response) => {
            let {id, email, login} = response.data
            response.resultCode === 0 ? this.props.setUserData(id, email, login) : console.log('Not logined')
        });
    }
    render() {
        return <Header {...this.props} />;
    }
}
const mapStateToProps = (state) => ({
    authorised: state.auth.authorised,
    login: state.auth.login,
    userId: state.auth.userId
})


export default connect (mapStateToProps,{setUserData}) (HeaderContainer);
