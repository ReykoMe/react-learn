import React from "react";
import PostsWrapper from "./Posts/PostsWrapper";

const Wall = ({ wallPosts, inputText, addPost, updateText }) => {
    let textArea = React.createRef(); //Связываем наше текстовое поле при помощи рефа
    let onMessageAdd = () => addPost();
    let onTextChange = () => updateText(textArea.current.value);

    return (
        <div className='row'>
            <div className='col-md-12'>
                <div className={"input-group mb-4"}>
                    <input
                        type='text'
                        placeholder='Please input your message'
                        className='form-control'
                        onChange={onTextChange}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                onMessageAdd();
                            }
                        }}
                        ref={textArea} //связываем наше текстовое поле с переменной textArea, при помощи React.createRef()
                        value={inputText}
                    />
                    <div className='input-group-append'>
                        <input type='button' value='Submit' className='btn btn-primary' onClick={onMessageAdd} />
                    </div>
                </div>

                <div className='row'>
                    <PostsWrapper wallPosts={wallPosts} />
                </div>
            </div>
        </div>
    );
};

export default Wall;
