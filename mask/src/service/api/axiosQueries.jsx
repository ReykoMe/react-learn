import * as axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "6300383d-aed7-4a6a-ac63-3c9ab8e95bb3",
    },
});

const friendsApi = {
    //Получить список пользователей
    getAllUsers(page, count) {
        console.log("getAllUsers query");
        let url = `users?count=${count}&page=${page}`;
        return instance.get(url).then((response) => response.data);
    },
    //Подписаться на пользователя
    userSubscribe(userId) {
        let url = `follow/${userId}`;
        return instance.post(url, {}).then((response) => response.data);
    },
    //Отписаться от пользователя
    userUnsubscribe(userId) {
        let url = `follow/${userId}`;
        return instance.delete(url).then((response) => response.data);
    },
}

const profileApi = {
   getProfileInfo(userId){
        console.log("getProfileInfo query");
        let url = `profile/${userId}`;
        return instance.get(url).then((response) => response.data);
    }
}


export { profileApi, friendsApi };
