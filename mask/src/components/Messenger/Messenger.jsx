import React from "react";
import Users from "./Chats/users";
import Messages from "./Messages/messages";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {CheckAuth} from '../HOC/AuthRedirect'

const Messenger = (props) => {
    if (!props.authorised) return <Redirect to = {"/login"}/>
    return (
        <div className="row">
            <Users users={props.messenger.users}/>
            <Messages messenger={props.messenger}/>
        </div>
    )
}

//Если данных немного и кода для отдельного файла-контейнера слишком мало, можно использовать
//его непоредственно внутри компоненты. Создается mapStateToProps, а вместо компоненты по
//умолчанию экспортируется коннект. При этом структура проекта не будет засоряться излишними
//контейнерами.

let mapStateToProps = (state) => {
    return {
        messenger: state.messenger,
    }
}

//HOC вызываем хок CheckAuth, который вернет компонент Messenger, если пользователь авторизован, иначе перенаправит нас на страницу логина.
//const AuthRedirect = CheckAuth(Messenger);
const AuthRedirect = CheckAuth(Messenger)
export default connect(mapStateToProps)(AuthRedirect);
//export default connect(mapStateToProps)(Messenger);