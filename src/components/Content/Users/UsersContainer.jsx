import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../../redux/Reducers/usersReducer";


const mapStateToProps= (state) => {
    debugger;
    return{
        users: state.userPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger;
    return{
        follow: (usersId) => {
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