import React from "react";
import {NavLink} from "react-router-dom";

//Создаем подкомпоненту прямо внутри компоненты users, так как больше она нигде использоваться не будет
const UserItem = (props) => {
    let path = "/Messenger/" + props.id; //создаем переменную для более короткой записи в навлинке
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Users = (props) => {
    //создаем новый массив, где usersData берет данные из массива объектов, расположенном в index.js, передаваемый через props
    let usersElementsArray = props.users.map((user) => <UserItem name={user.name}
                                                                 id={user.id}
                                                                 key={user.id}/>);

    return (
        <div className="users col-md-2">
            {usersElementsArray}
        </div>
    )
}

export default Users;