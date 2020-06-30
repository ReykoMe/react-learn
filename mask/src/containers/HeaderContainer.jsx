import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import { setUserData } from "../redux/reducers/auth-reducer";
import { profileApi } from "../service/api/axiosQueries";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {Redirect} from "react-router-dom";
const HeaderContainer = () => {
    const auth = useSelector((state) => state.auth); //селектор, возвращает необходимый кусок стейта, который потом прокидывается в хэдер
    const setUser = useDispatch()
    //при запуске приложения запросить на сервере данные авторизации.
    
    useEffect(()=> {
        profileApi.getMyProfile().then((response) => {
                        let {id, email, login} = response.data
                        response.resultCode === 0 ? setUser(setUserData(id, email, login, true)) : console.log('Not logined')
                    });
    }, [setUser]) //необходимо установить данную зависимость, ибо небезопасно ???
    
    return <Header {...auth}/>;
};

export default HeaderContainer;
