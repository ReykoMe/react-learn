import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "6300383d-aed7-4a6a-ac63-3c9ab8e95bb3",
        //"API-KEY": "8c9ba420-6f68-4643-bac4-eb54bfaf669c",
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
};

const profileApi = {
    login(data) {
        let url = "auth/login";
        return instance.post(url, data).then((response) => response.data);
    },
    logout() {
        console.log("user Logout");
        let url = "auth/login";
        return instance.delete(url).then((response) => response.data);
    },
    getMyProfile() {
        console.log("Check authorise");
        let url = "auth/me";
        return instance.get(url).then((response) => {
            return response.data;
        });
    },

    getProfileInfo(userId) {
        console.log("getProfileInfo query");
        let url = `profile/${userId}`;
        return instance.get(url).then((response) => response.data);
    },
    getStatus(userId) {
        console.log("getStatus query");
        let url = `profile/status/${userId}`;
        return instance.get(url).then((response) => response.data);
    },
    updateStatus(status) {
        console.log("Update Status query");
        return instance.put("profile/status", { status: status });
    },
    loadAllUsers(page) {
        let url = `users?count=100&page=${page}`;
        return instance.get(url).then((response) => {
            return response.data.items
            });
    },
  
    loadAvatarImage(file) {
        console.log("Load Avatar Image query");
        const formData = new FormData();
        formData.append("image", file);
        return instance.put("profile/photo", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
};

export { profileApi, friendsApi };
