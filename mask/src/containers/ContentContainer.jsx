import React, {useEffect} from "react";
import {
    getProfileSummary,
    updateUserStatus,
    loadAvatarImage,
} from "../redux/reducers/profile-reducer";
import {useSelector, useDispatch } from "react-redux";
import Content from "../components/Content/Content";
import { withRouter } from "react-router-dom";
import { CheckAuth } from "../components/HOC/AuthRedirect";
import { compose } from "redux";

const ContentContainer = (props) => {
    const auth = useSelector(state => state.auth)
    const userProfile = useSelector(state => state.profile)
    const dispatch = useDispatch()
    let uId = props.match.params.userId //через let, так как uId меняется в зависимости от того, пришло оно в пропсах или не
    //обновить статус пользователя
    const updateStatus = (status) => dispatch(updateUserStatus(status))
    //санка, получить суммарную информацию о пользователе
    const getUserInfo = (userId) => dispatch(getProfileSummary(userId))
    //обновить аватарку
    const updateAvatar = (photoFile) => dispatch(loadAvatarImage(photoFile))
//при начальной загрузке uId пустой, поэтому назначаем id нашего пользователя, который сидит в authReducer
    useEffect(()=> { //
        if (!uId) {
            uId = auth.userId
        }
        getUserInfo(uId)
    }, [uId]) //в зависимости отдаем uId (userId), так как при его изменении будет вызываться getUserInfo
    return <Content userProfile={userProfile} authorised={auth.authorised} updateUserStatus={updateStatus} loadAvatarImage={updateAvatar}/>
}

export default compose ( //экспортируем по умолчанию ContentContainer, обернув его в ХОК, и в WidthRouter
    withRouter,
    CheckAuth
)(ContentContainer)

