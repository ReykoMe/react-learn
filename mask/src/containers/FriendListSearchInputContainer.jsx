import React from 'react';
import { updateSearchInputAC } from "../redux/reducers/friends-reducer";
import { useSelector, useDispatch } from 'react-redux';

import SearchFriendsInput from "../components/Content/FriendList/SearchFriendsInput";


const SearchFriendsInputContainer = () => {
    const updateInput = useDispatch()
    const searchInputSelector = useSelector(state => state.friends.searchInputText)
    const updateTextInput = (text)=>  updateInput(updateSearchInputAC(text))
    
    return <SearchFriendsInput updateInput={updateTextInput} textInput={searchInputSelector}/>
};
// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateInput: (text) => dispatch(updateSearchInputAC(text)),
//     };
// };
// const SearchFriendsInputContainer = connect(mapStateToProps, mapDispatchToProps)(SearchFriendsInput);
export default SearchFriendsInputContainer;
