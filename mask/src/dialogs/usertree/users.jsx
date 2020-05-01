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
    //Кусок данных, имитирующий инфу из базы данных, в будущем поменяется на БД
    let usersData = [
        {id: 1, name: "Anatoly"},
        {id: 2, name: "Dmytri"},
        {id: 3, name: "Oksana"},
        {id: 4, name: "Gennadi"},
        {id: 5, name: "Garry"},
        {id: 6, name: "Fedor"}
    ]

    //Создадим новый массив и вытащим из него все значения usersData (element) посредством метода map
    let usersElementsArray = usersData.map((element) => <UserItem name={element.name} id={element.id} key ={element.id}/>);

    return (
        <div className="users">
            {usersElementsArray}
        </div>
    )
}

export default Users;