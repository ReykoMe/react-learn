import React from "react";
import classes from "./users.module.css";
import {NavLink} from "react-router-dom";


//Создаем подкомпоненту прямо внутри компоненты users, так как больше она нигде использоваться не будет
const UserItem = (props) => {
    let path = "/Messenger/" + props.id; //создаем переменную для более короткой записи в навлинке
    return (
        <div className={classes.item + ' ' + classes.selected}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Users = (props) => {
    //создаем новый массив, где usersData берет данные из массива объектов, расположенном в index.js, передаваемый через props
    let usersElementsArray = props.usersData.map((element) => <UserItem name={element.name}
                                                                        id={element.id}
                                                                        key ={element.id}/>);

    return (
        <div className="users">
            {usersElementsArray}
        </div>
    )
}

export default Users;