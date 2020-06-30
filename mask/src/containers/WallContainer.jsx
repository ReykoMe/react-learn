import React from "react";
import { addPostAC, updateTextAC } from "../redux/reducers/profile-reducer";
import Wall from "../components/Content/Wall/Wall";
import { useSelector, useDispatch } from "react-redux";

const WallContainer = () => {
    const wallPosts = useSelector((state) => state.profile.wallPosts);
    const inputText = useSelector((state) => state.profile.newText);
    const dispatch = useDispatch();
    
    const addPost = () => dispatch(addPostAC());
    const updateText = (text) => dispatch(updateTextAC(text));
    
    return <Wall wallPosts={wallPosts} inputText={inputText} updateText={updateText} addPost={addPost} />;
};
// let mapStateToProps = (state) => {
//     return {
//         wallPosts: state.profile.wallPosts,
//         inputText: state.profile.newText,
//     };
// };
// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateText: (text) => {
//             dispatch(updateTextAC(text));
//         },
//         addPost: () => {
//             dispatch(addPostAC());
//         },
//     };
// };

// const WallContainer = connect(mapStateToProps, mapDispatchToProps)(Wall);
export default WallContainer;
