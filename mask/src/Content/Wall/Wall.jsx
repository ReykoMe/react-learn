import React from "react";
import PostsWrapper from "./Posts/PostsWrapper";
import {addPostAC, updateTextAC} from "../../profile-reducer";

const Wall = (props) => {
    let textArea = React.createRef() //Связываем наше текстовое поле при помощи рефа

    let addMessage = () => {
       props.dispatch(addPostAC());
    };
    let areaTextChanged = () => {
        let text = textArea.current.value;
        props.dispatch(updateTextAC(text));
    }

    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col">
 {/*INPUT SECTION START--------------------------------------------------------------------------------------------*/}
                        <div className={"input-group mb-4"}>

                            <input type="text" placeholder="Please input your message" className="form-control"
                                   onChange={areaTextChanged}
                                   onKeyPress={(e) => {
                                       if (e.key === "Enter") {
                                           addMessage();
                                       }
                                   }}
                                   ref={textArea} //связываем наше текстовое поле с переменной textArea, при помощи React.createRef()
                                   value={props.areaText}
                            />

                            <div className="input-group-append">
                                <input type="button"
                                       value="Submit"
                                       className="btn btn-primary"
                                       onClick={addMessage}

                                />
                            </div>

                        </div>
                    </div>
{/*INPUT SECTION END----------------------------------------------------------------------------------------------*/}
                </div>
                <div className="row">
                    <PostsWrapper wallPosts={props.wallPosts}/>
                </div>
            </div>


        </div>
    )
}

export default Wall;