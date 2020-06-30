import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar";
import { getLastRegisteredUsers } from "../redux/reducers/sidebar-reducer";

const SidebarContainer = () => {
    const sidebar = useSelector((state) => state.sidebar);
    
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(getLastRegisteredUsers(sidebar.page, sidebar.count))
    },[dispatch, sidebar.page, sidebar.count])
    return <Sidebar sidebar={sidebar} />;
};

// class SidebarContainer extends React.Component {
//     componentDidMount() {
//         this.props.getLastRegisteredUsers(this.props.sidebar.page, this.props.sidebar.count)
//     }
//     render() {
//         return <Sidebar {...this.props} />;
//     }
// }

// let mapStateToProps = (state) => {
//     return {
//         sidebar: state.sidebar,
//     };
// };

// export default connect(mapStateToProps, {getLastRegisteredUsers})(SidebarContainer);

export default SidebarContainer;
