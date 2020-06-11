import { likesGen } from "../../state";
import { profileApi } from "../../service/api/axiosQueries";
const initState = {
    currentProfile: null,
    status: "",
    newText: "",
    wallPosts: [
        { id: 1, author: "Василий Чичкалкин", message: "Не-а", likes: 5 },
        { id: 2, author: "Вероника Бусилкина", message: "Все понятно", likes: 11 },
        { id: 3, author: "Аркадий Запоротый", message: "Проверочный пост номер какой-то", likes: 32 },
        { id: 4, author: "Зинаида Зидановна", message: "Привет, давай попробуем в React", likes: 0 },
        { id: 5, author: "Дмитрий леваков", message: "Однако дратути", likes: 21 },
    ],
};

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: state.wallPosts.length + 1,
                author: "state.currentProfile.fullName",
                message: state.newText,
                likes: likesGen(),
            };
            let newState = { ...state };
            newState.wallPosts = [...state.wallPosts];
            newState.wallPosts.push(newPost);
            newState.newText = "";
            console.log(`Текст: ${state.newText} добавлен в wallPosts`);
            return newState;
        }
        case "UPDATE-TEXT": {
            let newState = { ...state };
            newState.newText = action.newText;
            console.log(state.newText);
            return newState;
        }
        case "LOAD_PROFILE": {
            return { ...state, currentProfile: action.profileId };
        }
        case "SET_STATUS": {
            return { ...state, status: action.status };
        }
        default:
            return state;
    }
};
export const loadUserProfile = (profileId) => ({ type: "LOAD_PROFILE", profileId });
export const addPostAC = () => ({ type: "ADD-POST" });
export const updateTextAC = (text) => ({ type: "UPDATE-TEXT", newText: text });
export const setStatus = (status) => ({ type: "SET_STATUS", status });

export const getUserProfileInfo = (userId) => (dispatch) => {
    profileApi.getProfileInfo(userId).then((response) => {
        dispatch(loadUserProfile(response));
    });
};

export const getUserStatus = (userId) => (dispatch) => {
  profileApi.getStatus(userId).then((response) => {
    !response ? dispatch(setStatus('Нет статуса')):dispatch(setStatus(response))
    })}    

export const updateUserStatus = (status) => (dispatch) => {
  profileApi.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
    
});
}
export default profileReducer;
