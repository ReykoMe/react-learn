import React from "react";
import classes from './Messenger.module.css';
import Users from "./Chats/users";
import Messages from "./Messages/messages";
import { connect } from "react-redux";



const Messenger = (props) => {
    return (
        <div className={classes.dialogs}>
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
        messenger: state.messenger
    }
}

export default connect(mapStateToProps)(Messenger);