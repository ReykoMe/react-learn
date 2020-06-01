const initState = {
    userId: null,
    email: null,
    login: null,
    authorised: false
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state, //делаем поверхностную копию state
                ...action.data, //достаем из action.data все данные и запихиваем мх в state. Имена соответствуют API, поэтому они должны сохраниться
                authorised:true
            };
        default:
            return state;
    }
};

export const setUserData = (userId, email, login) => ({ type: "SET_USER_DATA", data: { userId, email, login } });
export default authReducer;
