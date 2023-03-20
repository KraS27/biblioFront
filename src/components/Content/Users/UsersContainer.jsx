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
import axios from "axios";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://localhost:7079/User/GetUsers?page=${this.props.currentPage}&limit=${this.props.pageSize}`).then(response => {
            this.props.setUsersCount(response.data.usersCount);
            this.props.setUsers(response.data.users);
        })
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://localhost:7079/User/GetUsers?page=${page}&limit=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.users);
        })
    }
    render = () => {
        return <Users pageNumberCount={Math.ceil(this.props.usersCount / this.props.pageSize)}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
        />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)