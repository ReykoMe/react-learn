import React from "react";
import classes from './Sidebar.module.css';
//Создаем экземпляр (подкомпоненту)одного элемента
let FriendItem = (props) => {
    return(
        <div className="card mb-3">
            <div className={classes.item + " card-body p-2"}>
                <div> {props.firstName} </div>
                <p >Цитата дня: </p>
                <p>{props.status}</p>
            </div>

        </div>
    )
}
//перебираем массив friends из файла state.js и для каждого элемента внутри сайдбара создаем компоненту FriendItem с параметрами
const Sidebar = (props) => {
    //При каждой итерации возвращать возвращать следующий элемент с данными
    let lastFriends = props.sidebar.friends.map((friend) => <FriendItem firstName={friend.firstName}
                                                                status={friend.status}
                                                                key = {friend.id}
    />);


    return (
        <div className={classes.sidebar +" col-3 wrapper"}>
            <h2>Last friends online</h2>
            <div>
                {lastFriends}
            </div>
        </div>
    )
}

export default Sidebar;