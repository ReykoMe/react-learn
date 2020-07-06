import { likesGen } from "../../state";
import { profileApi } from "../../service/api/axiosQueries";
import {ADD_POST, LOAD_AVATAR_IMAGE_OK, LOAD_PROFILE, SET_STATUS, UPDATE_TEXT} from "../actions/actions";
import initState from '../initials/profile'


const profileReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_POST: {
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
            return newState;
        }
        case UPDATE_TEXT: {
            let newState = { ...state };
            newState.newText = action.newText;
            return newState;
        }
        case LOAD_PROFILE: {
            return { ...state, currentProfile: action.profileId };
        }
        case SET_STATUS: {
            return { ...state, status: action.status };
        }
        case LOAD_AVATAR_IMAGE_OK: {
            return { ...state, currentProfile: {...state.currentProfile, photos: action.file} };
        }
        default:
            return state;
    }
};

export const loadUserProfile = (profileId) => ({ type: "LOAD_PROFILE", profileId });
export const addPostAC = () => ({ type: "ADD-POST" });
export const updateTextAC = (text) => ({ type: "UPDATE-TEXT", newText: text });
export const setStatus = (status) => ({ type: "SET_STATUS", status });
export const loadAvatarImageOk = (file) => ({type: "LOAD_AVATAR_IMAGE_OK", file})

export const getProfileSummary = (userId) => async (dispatch) => {
    dispatch(getUserProfileInfo(userId))
    dispatch(getUserStatus(userId))
}
export const getUserProfileInfo = (userId) => async (dispatch) => {
    let response = await profileApi.getProfileInfo(userId);
    dispatch(loadUserProfile(response));
};

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileApi.getStatus(userId);
    !response ? dispatch(setStatus("Нет статуса")) : dispatch(setStatus(response));
};

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileApi.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const loadAvatarImage = (file) => async (dispatch) => {
    let response = await profileApi.loadAvatarImage(file)

    if (response.data.resultCode === 0) {
        dispatch(loadAvatarImageOk(response.data.data.photos))
    }
    
    
}

export default profileReducer;
