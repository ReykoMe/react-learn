import { addPostAC, updateTextAC } from "../redux/reducers/profile-reducer";
import Wall from "../components/Content/Wall/Wall";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        wallPosts: state.profile.wallPosts,
        inputText: state.profile.newText,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text) => {
            dispatch(updateTextAC(text));
        },
        addPost: () => {
            dispatch(addPostAC());
        },
    };
};

const WallContainer = connect(mapStateToProps, mapDispatchToProps)(Wall);
export default WallContainer;
