import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setSubscribers,
    setUsers,
    setUsersCount, toogleIsFetching,
    unFollow
} from "../../../redux/Reducers/usersReducer";
import axios from "axios";
import Preloader from "../../Common/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://localhost:7079/users/subscribers?userId=13`)
            .then(response => {
                debugger;
                this.props.setSubscribers(response.data.subscribers);
            }
        )
        axios.get(`https://localhost:7079/Users?page=${this.props.currentPage}&limit=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersCount(response.data.usersCount);
                this.props.setUsers(response.data.users);
            }
        )
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toogleIsFetching(true);
        axios.get(`https://localhost:7079/Users?page=${page}&limit=${this.props.pageSize}`)
            .then(response => {
                debugger;
                this.props.toogleIsFetching(false);
                this.props.setUsers(response.data.users);
            }
        )
    }
    render = () => {
        return (
            <div>
                {this.props.isFetching ?
                    <Preloader /> :
                    <Users pageNumberCount={Math.ceil(this.props.usersCount / this.props.pageSize)}
                           currentPage={this.props.currentPage}
                           onPageChanged={this.onPageChanged}
                           users={this.props.users}
                           unfollow={this.props.unFollow}
                           follow={this.props.follow}
                           subscribers={this.props.subscribers}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps= (state) => {
    return{
        users: state.userPage.users,
        usersCount: state.userPage.usersCount,
        pageSize: state.userPage.pageSize,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        subscribers: state.userPage.subscribers
    }
}
const mapDispatchToProps = {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersCount,
    toogleIsFetching,
    setSubscribers
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)