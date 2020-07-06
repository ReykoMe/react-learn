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

export default SidebarContainer;
