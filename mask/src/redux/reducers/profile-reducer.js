import {likesGen} from "../../state";

const initState = {
  currentProfile: null,
  newText: "",
  wallPosts: [
    {id: 1, author: "Василий Чичкалкин", message: "Бородульку тебе", likes: 5},
    {id: 2, author: "Вероника Бусилкина", message: "I KNOW!!!", likes: 11},
    {id: 3, author: "Аркадий Запоротый", message: "Пойдем-ка покурим-ка", likes: 32},
    {id: 4, author: "Зинаида Зидановна", message: "Верни сотку", likes: 0},
    {id: 5, author: "Алкобот Дизенфектиконович", message: "Ктулху зохавит тебя", likes: 21},
  ]
}

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD-POST': {
      let newPost = {
        id: state.wallPosts.length + 1,
        author: 'state.currentProfile.fullName',
        message: state.newText,
        likes: likesGen()
      }
      let newState = {...state};
      newState.wallPosts = [...state.wallPosts]
      newState.wallPosts.push(newPost)
      newState.newText = '';
      console.log(`Текст: ${state.newText} добавлен в wallPosts`);
      return newState;
    }
    case 'UPDATE-TEXT': {
      let newState = {...state};
      newState.newText = action.newText;
      console.log(state.newText);
      return newState
    }
    case 'LOAD_PROFILE': {
      return {...state, currentProfile: action.profileId}
    }
    default:
      return state;
  }
};
export const loadUserProfile = (profileId) => ({type: 'LOAD_PROFILE', profileId})
export const addPostAC = () => ({type: 'ADD-POST'});
export const updateTextAC = (text) => ({type: 'UPDATE-TEXT', newText: text})
export default profileReducer;