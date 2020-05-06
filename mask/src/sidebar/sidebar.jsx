import React from "react";
import classes from './sidebar.module.css';
//Создаем экземпляр (подкомпоненту)одного элемента
let FriendItem = (props) => {
    return(
        <div className={classes.friend}>
            <div className={classes.name}>{props.firstName}</div>
            <div className={classes.status}><p>Цитата дня: </p>{props.status}</div>
        </div>
    )
}
//перебираем массив friends из файла state.js и для каждого элемента внутри сайдбара создаем компоненту FriendItem с параметрами
const Sidebar = (props) => {
    //При каждой итерации возвращать возвращать следующий элемент с данными
    let lastFriends = props.friends.map((friend) => <FriendItem firstName={friend.firstName}
                                                                status={friend.status}
    />);


    return (
        <div className={classes.sidebar}>
            <h2>Last friends online</h2>
            <div className={classes.friends}>
                {lastFriends}
            </div>
        </div>
    )
}

export default Sidebar;