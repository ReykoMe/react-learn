import {likesGen} from "../../state";

const initState = {
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
      return state
    case 'UPDATE-TEXT':
      state.newText = action.newText;
      console.log(state.newText);
      return state
    default:
      return state;
  }
};

export const addPostAC = () => ({type: 'ADD-POST'});
export const updateTextAC = (text) => ({type: 'UPDATE-TEXT', newText: text})
export default profileReducer;