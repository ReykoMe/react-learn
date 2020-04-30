import React from "react";
import classes from "./users.module.css";
import {NavLink} from "react-router-dom";


//Создаем подкомпоненту прямо внутри компоненты users, так как больше она нигде использоваться не будет
const UserItem = (props) => {
    let path = "/dialogs/" + props.id; //создаем переменную для более короткой записи в навлинке
    return (
        <div className={classes.item + ' ' + classes.selected}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Users = (props) => {
    return (
        <div className="users">
            <UserItem name="Толян" id="1" /> {/*вызываем UserItem с параметрами name и id, они передаются в класс, где могут использоваться посредством props.name или props.id*/}
            <UserItem name="Алекс" id="2" />
            <UserItem name="Димон" id="3" />
            <UserItem name="Фуфик" id="4" />
        </div>
    )
}

export default Users;