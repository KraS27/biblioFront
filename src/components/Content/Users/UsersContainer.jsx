import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../../redux/Reducers/usersReducer";

const mapStateToProps= (state) => {
    return{
        users: state.userPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        follow: (usersId) => {
            debugger;
            dispatch(followAC(usersId));
        },
        unfollow: (usersId) => {
            dispatch(unFollowAC(usersId));
        },
        setUsers: () => {
            dispatch(setUsersAC());
        }
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;