import React from "react";
import { getUserProfileInfo } from "../redux/reducers/profile-reducer";
import { connect } from "react-redux";
import Content from "../components/Content/Content";
import { withRouter } from "react-router-dom";
import { CheckAuth } from "../components/HOC/AuthRedirect";
class ContentContainer extends React.Component {
    getProfileInfo = (userId) => {
        this.props.getUserProfileInfo(userId);
    };
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8509; //Если userId === null || undefined TODO: изменить на подтягивание из стейта
        }
        this.getProfileInfo(userId);
    }
    render() {
        return <Content {...this.props} />;
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profile.currentProfile,
    //authorised: state.auth.authorised,
});
//Отрисовываем контент, если пользователь авторизован, если нет - добро пожаловать на страницу логина. TODO: необходимо разделить некоторые компоненты и выделить их в отдельные потоки, чтобы пользователь смог просматривать, напримр, последние новости или пользователей, но не смог на них подписываться.
const AuthRedirect = CheckAuth(ContentContainer);
//WithRouter позволяет перекинуть в пропсы подключенного компонента текущий URL и другие данные относительно текущего адреса.
//Общим планом картина выглядит примерно так: connect(withRouter(checkAuth(ContentContainer)))
const urlDataContainer = withRouter(AuthRedirect);

export default connect(mapStateToProps, {
    getUserProfileInfo,
})(urlDataContainer);
