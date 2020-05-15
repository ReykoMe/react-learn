import {likesGen} from "./state";

const profileReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-POST':
            state.wallPosts.push(
                {
                    id: state.wallPosts.length + 1,
                    author: 'Сергей Гумноедов',
                    message: state.newText,
                    likes: likesGen()
                }
            );
            console.log(`Текст: ${state.newText} добавлен в Store._state.profile.newText`);
            state.newText = '';
            break; //вместо break в каждой конструкции можно использовать return state,
        case 'UPDATE-TEXT':
            state.newText = action.newText;
            console.log(state.newText);
            break;
        default: return state;
    }
    return state;
};

export const addPostAC = () => ({type: 'ADD-POST'});
export const updateTextAC = (text) => ({type: 'UPDATE-TEXT', newText: text})
export default profileReducer;