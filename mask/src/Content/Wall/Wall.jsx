import React from "react";
import classes from './Wall.module.css';
import PostsWrapper from "./Posts/PostsWrapper";

const Wall = (props) => {
    let textArea = React.createRef()
    let addMessage = () => {

        //Вытягиваем из props фунецию addPost, которая по факту находится в state.js, вызываем ее
        //и передаем параметр text, взятый из textArea
        props.dispatch({type: 'ADD-POST'});
    };
    let areaTextChanged = () => {
        let text = textArea.current.value;
        props.dispatch({type: 'UPDATE-TEXT', newText: text});
    }
    return(
        <div className={classes.wall}>
            <div className={classes.messageArea}>
                <textarea onChange={areaTextChanged} ref={textArea} //связываем наше текстовое поле с переменной textArea, при помощи React.createRef()
                          cols="30" rows="2" placeholder="Please input your message" value={props.areaText}/>
                <input type="button" value="Submit" onClick={addMessage}/>
            </div>

            <PostsWrapper wallPosts={props.wallPosts}/>
        </div>
    )
}

export default Wall;