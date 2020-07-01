import React from 'react';
import { updateSearchInputAC} from "../redux/reducers/friends-reducer";
import { useSelector, useDispatch } from 'react-redux';

import SearchFriendsInput from "../components/Content/FriendList/SearchFriendsInput";


const SearchFriendsInputContainer = () => {
    //На апихе функционал поиска не реализован, а пользователи отдаются в ограниченном количестве за раз (до 100 шт).
    // Единственный вариант - загружать все циклом и помещать в локальный стейт, а потом уже фильтровать. На тестах
    // такая загрузка (обратно-таки, синхронная), занимает порядка 50 секунд. Поэтому, скорей всего, реализовывать
    // данный функционал я не буду до тех пор, пока он не появится в API.
    const updateInput = useDispatch()
    const searchInputSelector = useSelector(state => state.friends.searchInputText)
   
    const updateTextInput = (text)=>  updateInput(updateSearchInputAC(text))
   
    return <SearchFriendsInput updateInput={updateTextInput} textInput={searchInputSelector} />
};

export default SearchFriendsInputContainer;
