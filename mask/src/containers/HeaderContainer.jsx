import React from "react";
import Header from "../Header/Header";
import * as axios from "axios";
import {setUserData} from '../redux/reducers/auth-reducer'
import {connect} from 'react-redux'
class HeaderContainer extends React.Component {
  
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials:true
        }).then((response) => {
            let {id, email, login} = response.data.data
            response.data.resultCode === 0 ? this.props.setUserData(id, email, login) : console.log('Not logined')
            console.log(response)
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
