import { profileApi } from "../../service/api/axiosQueries";
import { getUserProfileInfo } from "./profile-reducer";
import {SET_USER_DATA } from '../actions/actions'
import initState from '../initials/auth'


const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, //делаем поверхностную копию state
                ...action.payload, //достаем из action.data все данные и запихиваем мх в state. Имена соответствуют API, поэтому они должны сохраниться               
            };

        default:
            return state;
    }
};

export const setUserData = (userId, email, login, authorised) => ({ type: SET_USER_DATA, payload: { userId, email, login, authorised } });

export const userLogin = (data) => (dispatch) => {
    profileApi.login(data).then((response) => {
        if (response.resultCode === 0) {
            dispatch(getUserProfileInfo(response.data.userId));
            profileApi.getMyProfile().then((res) => {
                const { id, email, login } = res.data;
                dispatch(setUserData(id, email, login, true));
            });
        } else alert("Такого пользователя не существует или какая то другая ошибка");
    });
};

export const userLogOut = () => (dispatch) => {
    profileApi.logout().then((response) => {
        if (response.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
        } else alert("Такого пользователя не существует или какая то другая ошибка");
    });
};

export default authReducer;
