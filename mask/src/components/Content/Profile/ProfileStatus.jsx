import React from "react";
import { useReducer } from "react";

const ProfileStatus = (props) => {
    const localInit = {
        editable: false,
        statusText: props.status,
    };
    const localReducer = (state, action) => {
        switch (action.type) {
            case "ENTER_EDIT_MODE":
                return { ...state, editable: true };
            case "EXIT_EDIT_MODE":
                return { ...state, editable: false };
            case "STATUS_TEXT_CHANGE":
                return { ...state, statusText: action.text };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(localReducer, localInit);
    const onTextStatusChange = (e) => {
        dispatch({ type: "STATUS_TEXT_CHANGE", text: e.currentTarget.value });
    };
    const exitEditMode = () => {
        dispatch({ type: "EXIT_EDIT_MODE" });
        props.status !== state.statusText && props.updateUserStatus(state.statusText);
    };
    const handleKey = (e) => {
        e.key === "Enter" && exitEditMode();
    };

    return (
        <div>
            {!state.editable ? (
                <span onDoubleClick={() => dispatch({ type: "ENTER_EDIT_MODE" })}>{props.status}</span>
            ) : (
                <input
                    onChange={onTextStatusChange}
                    onKeyPress={handleKey}
                    autoFocus //автофокус при отрисовке компонента
                    onBlur={exitEditMode}
                    type='statusText'
                    value={state.statusText}
                    className='form-control'
                />
            )}
        </div>
    );
};

export default ProfileStatus;
