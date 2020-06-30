import React, {useCallback, useEffect} from "react";
import {
    getProfileSummary,
    getUserProfileInfo,
    getUserStatus,
    updateUserStatus,
    loadAvatarImage,
} from "../redux/reducers/profile-reducer";
import { connect, useSelector, useDispatch } from "react-redux";
import Content from "../components/Content/Content";
import { withRouter } from "react-router-dom";
import { CheckAuth } from "../components/HOC/AuthRedirect";
import { compose } from "redux";

const ContentContainer = (props) => {
    const auth = useSelector(state => state.auth)
    const userProfile = useSelector(state => state.profile)
    const dispatch = useDispatch()
    let uId = props.match.params.userId
    const getUserInfo = (userId) => {
        dispatch(getProfileSummary(userId))
    }
    useEffect(()=> {
        if (!uId) {
            uId = auth.userId
        }
        getUserInfo(uId)
    }, [uId])
    
    
    return <Content userProfile={userProfile.currentProfile}/>
}



// class ContentContainer extends React.Component {
    
//     getProfileInfo = (userId) => {
//         console.log(this.props);
//         this.props.getUserProfileInfo(userId);
//         this.props.getUserStatus(userId);
//     };
//     componentDidMount() {
//         let uId = this.props.match.params.userId;
//         if (!uId) {
//             uId = this.props.myId;
//         }
//         this.getProfileInfo(uId);
//     }currentuserId;(userId)
//     //Обновляем компонент при изменении userID, которое приходит в

//     render() {
//         return <Content {...this.props} />;
//     }
// }

// let mapStateToProps = (state) => ({
//     userProfile: state.profile.currentProfile,
//     status: state.profile.status,
//     myId: state.auth.userId,
//     //authorised: state.auth.authorised, теперь этот параметр находится в хоке
// });

// export default compose(
//     connect(mapStateToProps, {
//         getUserProfileInfo,
//         getUserStatus,
//         updateUserStatus,
//         loadAvatarImage,
//     }),
//     withRouter,
//     CheckAuth
// )(ContentContainer);

//TODO: необходимо разделить некоторые компоненты и выделить их в отдельные потоки, чтобы пользователь смог просматривать, напримр, последние новости или пользователей, но не смог на них подписываться.

//Отрисовываем контент, если пользователь авторизован, если нет - добро пожаловать на страницу логина.
//const AuthRedirect = CheckAuth(ContentContainer);
//WithRouter позволяет перекинуть в пропсы подключенного компонента текущий URL и другие данные относительно текущего адреса.
//Общим планом картина выглядит примерно так: connect(withRouter(checkAuth(ContentContainer)))
//const urlDataContainer = withRouter(AuthRedirect);

export default compose ( //экспортируем по умолчанию ContentContainer, обернув его в ХОК, и в WidthRouter
    withRouter,
    CheckAuth
)(ContentContainer)
// export default connect(mapStateToProps, {
//     getUserProfileInfo,
// })(urlDataContainer);
