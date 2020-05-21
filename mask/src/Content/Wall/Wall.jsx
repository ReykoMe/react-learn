import React from "react";
import PostsWrapper from "./Posts/PostsWrapper";


const Wall = (props) => {
  let textArea = React.createRef() //Связываем наше текстовое поле при помощи рефа
  let onMessageAdd = () => props.addPost();
  let onTextChange = () => props.updateText(textArea.current.value);

  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col">
            <div className={"input-group mb-4"}>
              <input type="text"
                      placeholder="Please input your message" className="form-control"
                      onChange={onTextChange}
                      onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    onMessageAdd();
                  }
                }}
                      ref={textArea} //связываем наше текстовое поле с переменной textArea, при помощи React.createRef()
                      value={props.inputText}
              />

              <div className="input-group-append">
                <input type="button"
                  value="Submit"
                  className="btn btn-primary"
                  onClick={onMessageAdd}
                />
              </div>

            </div>
          </div>
        </div>
        <div className="row">
          <PostsWrapper wallPosts={props.wallPosts} />
        </div>
      </div>
    </div>
  )
}

export default Wall;