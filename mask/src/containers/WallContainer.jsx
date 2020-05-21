import React from "react";
import { addPostAC, updateTextAC } from "../redux/reducers/profile-reducer";
import Wall from "../Content/Wall/Wall"

const WallContainer = (props) => {
  let state = props.store.getState();
  let addMessage = () =>  props.store.dispatch(addPostAC());
  let areaTextChanged = (text) => {
    props.store.dispatch(updateTextAC(text));
  }
  return (
    <Wall 
      wallPosts={state.profile.wallPosts}
      inputText={state.profile.newText}
      updateText={areaTextChanged}
      addPost={addMessage}
    />
  )
}

export default WallContainer;