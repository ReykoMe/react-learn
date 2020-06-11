import React from "react";
import { useState } from "react";

const ProfileStatus = (props) => {
    const [status, changeEditMode] = useState(false);

    return (
        <div>
            {!status ? (
                <span onDoubleClick={() => changeEditMode(true)}>{props.status}</span>
            ) : (
                <input
                    autoFocus //автофокус при отрисовке компонента
                    onBlur={() => changeEditMode(false)}
                    type='statusText'
                    value={props.status}
                    className='form-control'
                />
            )}
        </div>
    );
};
//Классовый компонент
// class ProfileStatus extends React.Component {
//     state = {
//         editMode: false,
//     };

//     enterEditMode = () => {
//         this.setState({
//             editMode: true
//         })
//     }

//     render() {
//         return (
//             <div>
//                 {!this.state.editMode ? (
//                     <span onDoubleClick={this.enterEditMode}>{this.props.status}</span>
//                 ) : (
//                     <input type='statusText' value={this.props.status} className='form-control' />
//                 )}
//             </div>
//         );
//     }
// }

export default ProfileStatus;
