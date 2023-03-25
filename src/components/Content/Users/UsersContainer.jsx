import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersCountAC, toogleIsFetchingAC,
    unFollowAC
} from "../../../redux/Reducers/usersReducer";
import axios from "axios";
import Preloader from "../../Common/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://localhost:7079/User/GetUsers?page=${this.props.currentPage}&limit=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersCount(response.data.usersCount);
                this.props.setUsers(response.data.users);
            }
        )
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toogleIsFetching(true);
        axios.get(`https://localhost:7079/User/GetUsers?page=${page}&limit=${this.props.pageSize}`)
            .then(response => {
                debugger;
                this.props.toogleIsFetching(false);
                this.props.setUsers(response.data.users);
            }
        )
    }
    render = () => {
        debugger;
        return (
            <div>
                <div>
                    {this.props.isFetching ? <Preloader /> : null}
                </div>
                <div>
                    <Users pageNumberCount={Math.ceil(this.props.usersCount / this.props.pageSize)}
                           currentPage={this.props.currentPage}
                           onPageChanged={this.onPageChanged}
                           users={this.props.users}
                           unfollow={this.props.unfollow}
                           follow={this.props.follow}
                    />
                </div>
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
        isFetching: state.userPage.isFetching
    }
}
const mapDispatchToProps = {
        follow: followAC,
        unfollow: unFollowAC,
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        setUsersCount: setUsersCountAC,
        toogleIsFetching: toogleIsFetchingAC
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)