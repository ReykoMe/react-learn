import React from "react";
import { connect } from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar";
import { getLastRegisteredUsers } from '../redux/reducers/sidebar-reducer';

class SidebarContainer extends React.Component {
    componentDidMount() {
        this.props.getLastRegisteredUsers(this.props.sidebar.page, this.props.sidebar.count)
    }
    render() {
        return <Sidebar {...this.props} />;
    }
}

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
    };
};

export default connect(mapStateToProps, {getLastRegisteredUsers})(SidebarContainer);
