import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersCountAC,
    unFollowAC
} from "../../../redux/Reducers/usersReducer";

const mapStateToProps= (state) => {
    return{
        users: state.userPage.users,
        usersCount: state.userPage.usersCount,
        pageSize: state.userPage.pageSize,
        currentPage: state.userPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        follow: (usersId) => {
            dispatch(followAC(usersId));
        },
        unfollow: (usersId) => {
            dispatch(unFollowAC(usersId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page) =>{
            dispatch(setCurrentPageAC(page));
        },
        setUsersCount: (count) =>{
            dispatch(setUsersCountAC(count));
        }
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;